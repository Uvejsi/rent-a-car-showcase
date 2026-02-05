import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCars, Car } from "@/hooks/useCars";
import { useCreateReservation } from "@/hooks/useReservations";
import { cars as fallbackCars } from "@/data/cars";
import { toast } from "sonner";
import {
  CheckCircle2,
  Calendar,
  User,
  Car as CarIcon,
  Sparkles,
  ArrowRight,
  Shield,
  Loader2,
} from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  carId: string;
  pickupDate: string;
  returnDate: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  carId?: string;
  pickupDate?: string;
  returnDate?: string;
}

const Rezervim = () => {
  const [searchParams] = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    carId: searchParams.get("makina") || "",
    pickupDate: "",
    returnDate: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  
  const { data: dbCars } = useCars();
  const createReservation = useCreateReservation();
  
  const allCars = useMemo(() => {
    if (dbCars && dbCars.length > 0) {
      return dbCars;
    }
    return fallbackCars.map(car => ({
      ...car,
      id: car.id.toString(),
      available: true,
      description: null
    })) as Car[];
  }, [dbCars]);

  useEffect(() => {
    const makinaId = searchParams.get("makina");
    if (makinaId) {
      setFormData((prev) => ({ ...prev, carId: makinaId }));
    }
  }, [searchParams]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Emri është i detyrueshëm";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Mbiemri është i detyrueshëm";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email-i është i detyrueshëm";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email-i nuk është i vlefshëm";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Numri i telefonit është i detyrueshëm";
    } else if (!/^[+]?[\d\s-]{8,}$/.test(formData.phone)) {
      newErrors.phone = "Numri i telefonit nuk është i vlefshëm";
    }
    if (!formData.carId) {
      newErrors.carId = "Ju lutem zgjidhni një makinë";
    }
    if (!formData.pickupDate) {
      newErrors.pickupDate = "Data e marrjes është e detyrueshme";
    }
    if (!formData.returnDate) {
      newErrors.returnDate = "Data e kthimit është e detyrueshme";
    } else if (
      formData.pickupDate &&
      new Date(formData.returnDate) <= new Date(formData.pickupDate)
    ) {
      newErrors.returnDate = "Data e kthimit duhet të jetë pas datës së marrjes";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const selectedCarData = allCars.find((c) => c.id === formData.carId);
        const days = Math.ceil(
          (new Date(formData.returnDate).getTime() - new Date(formData.pickupDate).getTime()) / (1000 * 60 * 60 * 24)
        );
        const totalPrice = selectedCarData ? selectedCarData.price * days : 0;
        
        await createReservation.mutateAsync({
          car_id: formData.carId,
          customer_name: `${formData.firstName} ${formData.lastName}`,
          customer_email: formData.email,
          customer_phone: formData.phone,
          pickup_date: formData.pickupDate,
          return_date: formData.returnDate,
          pickup_location: "Tiranë",
          total_price: totalPrice,
          car_name: selectedCarData?.name,
          car_brand: selectedCarData?.brand,
        });
        
        setSubmitted(true);
        toast.success("Rezervimi u dërgua me sukses!");
      } catch (error) {
        console.error("Error submitting reservation:", error);
        toast.error("Ndodhi një gabim. Ju lutem provoni përsëri.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const selectedCar = allCars.find((c) => c.id === formData.carId);

  if (submitted) {
    return (
      <Layout>
        <section className="min-h-screen flex items-center py-20">
          <div className="container max-w-xl">
            <div className="bg-card rounded-3xl p-10 shadow-xl text-center animate-scale-in relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
              
              <div className="relative">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full gradient-primary shadow-primary mb-8">
                  <CheckCircle2 className="h-12 w-12 text-white" />
                </div>
                
                <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                  Rezervimi u Pranua!
                </h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  Ekipi ynë do t'ju kontaktojë brenda 30 minutave për të
                  konfirmuar rezervimin.
                </p>
                
                <div className="bg-muted/50 rounded-2xl p-6 text-left mb-8">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Detajet e Rezervimit
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Emri</span>
                      <span className="font-medium">{formData.firstName} {formData.lastName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Makina</span>
                      <span className="font-medium">{selectedCar?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Marrja</span>
                      <span className="font-medium">{formData.pickupDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Kthimi</span>
                      <span className="font-medium">{formData.returnDate}</span>
                    </div>
                  </div>
                </div>
                
                <Button
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  className="rounded-xl"
                >
                  Bëj Rezervim Tjetër
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />
        
        <div className="container relative">
          <div className="text-center max-w-3xl mx-auto animate-slide-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white/80 text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              Rezervim i Shpejtë
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Rezervoni
              <span className="gradient-text"> Makinën</span> Tuaj
            </h1>
            <p className="text-white/60 text-lg">
              Plotësoni formularin dhe do t'ju kontaktojmë brenda 30 minutave.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Form */}
      <section className="py-12 -mt-16 relative z-10">
        <div className="container max-w-4xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Info */}
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl gradient-primary shadow-primary">
                  <User className="h-5 w-5 text-white" />
                </div>
                <h2 className="font-display text-xl font-semibold">
                  Të Dhënat Personale
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Emri *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    placeholder="Shkruani emrin"
                    className={`h-12 rounded-xl ${errors.firstName ? "border-destructive" : ""}`}
                  />
                  {errors.firstName && (
                    <p className="text-sm text-destructive">{errors.firstName}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">Mbiemri *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                    placeholder="Shkruani mbiemrin"
                    className={`h-12 rounded-xl ${errors.lastName ? "border-destructive" : ""}`}
                  />
                  {errors.lastName && (
                    <p className="text-sm text-destructive">{errors.lastName}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="email@shembull.com"
                    className={`h-12 rounded-xl ${errors.email ? "border-destructive" : ""}`}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Numri i Telefonit *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="+355 69 123 4567"
                    className={`h-12 rounded-xl ${errors.phone ? "border-destructive" : ""}`}
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive">{errors.phone}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Car Selection */}
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl gradient-primary shadow-primary">
                  <CarIcon className="h-5 w-5 text-white" />
                </div>
                <h2 className="font-display text-xl font-semibold">
                  Zgjedhja e Makinës
                </h2>
              </div>

              <div className="space-y-2">
                <Label>Makina *</Label>
                <Select
                  value={formData.carId}
                  onValueChange={(value) => handleChange("carId", value)}
                >
                  <SelectTrigger className={`h-12 rounded-xl ${errors.carId ? "border-destructive" : ""}`}>
                    <SelectValue placeholder="Zgjidhni makinën" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl">
                    {allCars.map((car) => (
                      <SelectItem key={car.id} value={car.id} className="rounded-lg">
                        {car.name} - €{car.price}/ditë
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.carId && (
                  <p className="text-sm text-destructive">{errors.carId}</p>
                )}
              </div>

              {selectedCar && (
                <div className="mt-6 p-5 bg-muted/50 rounded-xl border border-border">
                  <div className="flex gap-5">
                    <img
                      src={selectedCar.image}
                      alt={selectedCar.name}
                      className="w-28 h-20 object-cover rounded-xl"
                    />
                    <div className="flex-1">
                      <h3 className="font-display font-semibold text-lg">{selectedCar.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {selectedCar.type} • {selectedCar.seats} ulëse • {selectedCar.transmission}
                      </p>
                      <p className="font-display text-xl font-bold gradient-text">
                        €{selectedCar.price}/ditë
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Dates */}
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl gradient-primary shadow-primary">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
                <h2 className="font-display text-xl font-semibold">
                  Datat e Rezervimit
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="pickupDate">Data e Marrjes *</Label>
                  <Input
                    id="pickupDate"
                    type="date"
                    value={formData.pickupDate}
                    onChange={(e) => handleChange("pickupDate", e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className={`h-12 rounded-xl ${errors.pickupDate ? "border-destructive" : ""}`}
                  />
                  {errors.pickupDate && (
                    <p className="text-sm text-destructive">{errors.pickupDate}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="returnDate">Data e Kthimit *</Label>
                  <Input
                    id="returnDate"
                    type="date"
                    value={formData.returnDate}
                    onChange={(e) => handleChange("returnDate", e.target.value)}
                    min={formData.pickupDate || new Date().toISOString().split("T")[0]}
                    className={`h-12 rounded-xl ${errors.returnDate ? "border-destructive" : ""}`}
                  />
                  {errors.returnDate && (
                    <p className="text-sm text-destructive">{errors.returnDate}</p>
                  )}
                </div>
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full gradient-primary shadow-primary hover:shadow-glow transition-all duration-300 rounded-xl h-14 text-base shine-effect group animate-slide-up"
              style={{ animationDelay: '0.4s' }}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Duke dërguar...
                </>
              ) : (
                <>
                  Dërgo Rezervimin
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Rezervim;
