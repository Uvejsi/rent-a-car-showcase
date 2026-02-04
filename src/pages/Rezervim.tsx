import { useState, useEffect } from "react";
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
import { cars } from "@/data/cars";
import { toast } from "sonner";
import { CheckCircle2, Calendar, User, Car } from "lucide-react";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmitted(true);
      toast.success("Rezervimi u dërgua me sukses!");
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const selectedCar = cars.find((c) => c.id.toString() === formData.carId);

  if (submitted) {
    return (
      <Layout>
        <section className="py-20">
          <div className="container max-w-xl">
            <div className="bg-card rounded-2xl p-8 shadow-card text-center animate-scale-in">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Rezervimi u Dërgua!
              </h2>
              <p className="text-muted-foreground mb-6">
                Faleminderit për rezervimin tuaj. Do t'ju kontaktojmë së shpejti
                për të konfirmuar rezervimin.
              </p>
              <div className="bg-muted rounded-xl p-6 text-left">
                <h3 className="font-semibold mb-4">Detajet e Rezervimit:</h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="text-muted-foreground">Emri:</span>{" "}
                    {formData.firstName} {formData.lastName}
                  </p>
                  <p>
                    <span className="text-muted-foreground">Makina:</span>{" "}
                    {selectedCar?.name}
                  </p>
                  <p>
                    <span className="text-muted-foreground">Marrja:</span>{" "}
                    {formData.pickupDate}
                  </p>
                  <p>
                    <span className="text-muted-foreground">Kthimi:</span>{" "}
                    {formData.returnDate}
                  </p>
                </div>
              </div>
              <Button
                onClick={() => setSubmitted(false)}
                variant="outline"
                className="mt-6"
              >
                Bëj Rezervim Tjetër
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-12 bg-muted/50">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Rezervo Makinën
            </h1>
            <p className="text-muted-foreground text-lg">
              Plotësoni formularin për të rezervuar makinën tuaj të preferuar.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Info */}
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <User className="h-5 w-5" />
                </div>
                <h2 className="font-display text-xl font-semibold">
                  Të Dhënat Personale
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Emri *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    placeholder="Shkruani emrin"
                    className={errors.firstName ? "border-destructive" : ""}
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
                    className={errors.lastName ? "border-destructive" : ""}
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
                    className={errors.email ? "border-destructive" : ""}
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
                    className={errors.phone ? "border-destructive" : ""}
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive">{errors.phone}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Car Selection */}
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Car className="h-5 w-5" />
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
                  <SelectTrigger
                    className={errors.carId ? "border-destructive" : ""}
                  >
                    <SelectValue placeholder="Zgjidhni makinën" />
                  </SelectTrigger>
                  <SelectContent>
                    {cars.map((car) => (
                      <SelectItem key={car.id} value={car.id.toString()}>
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
                <div className="mt-6 p-4 bg-muted rounded-xl">
                  <div className="flex gap-4">
                    <img
                      src={selectedCar.image}
                      alt={selectedCar.name}
                      className="w-24 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="font-semibold">{selectedCar.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {selectedCar.type} • {selectedCar.seats} ulëse •{" "}
                        {selectedCar.transmission}
                      </p>
                      <p className="text-primary font-bold">
                        €{selectedCar.price}/ditë
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Dates */}
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Calendar className="h-5 w-5" />
                </div>
                <h2 className="font-display text-xl font-semibold">
                  Datat e Rezervimit
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="pickupDate">Data e Marrjes *</Label>
                  <Input
                    id="pickupDate"
                    type="date"
                    value={formData.pickupDate}
                    onChange={(e) => handleChange("pickupDate", e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className={errors.pickupDate ? "border-destructive" : ""}
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
                    className={errors.returnDate ? "border-destructive" : ""}
                  />
                  {errors.returnDate && (
                    <p className="text-sm text-destructive">{errors.returnDate}</p>
                  )}
                </div>
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full shadow-hover">
              Dërgo Rezervimin
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Rezervim;
