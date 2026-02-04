import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Kontakt = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Emri është i detyrueshëm";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email-i është i detyrueshëm";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email-i nuk është i vlefshëm";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subjekti është i detyrueshëm";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Mesazhi është i detyrueshëm";
    } else if (formData.message.length < 10) {
      newErrors.message = "Mesazhi duhet të ketë të paktën 10 karaktere";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmitted(true);
      toast.success("Mesazhi u dërgua me sukses!");
    }
  };

  const handleChange = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      content: "+355 69 123 4567",
      subContent: "+355 4 234 5678",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@autorent.al",
      subContent: "rezervime@autorent.al",
    },
    {
      icon: MapPin,
      title: "Adresa",
      content: 'Rruga "Dritan Hoxha", Nr. 45',
      subContent: "Tiranë, Shqipëri",
    },
    {
      icon: Clock,
      title: "Orari",
      content: "E Hënë - E Shtunë: 08:00 - 20:00",
      subContent: "E Diel: 09:00 - 18:00",
    },
  ];

  return (
    <Layout>
      <section className="py-12 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Na Kontaktoni
            </h1>
            <p className="text-muted-foreground text-lg">
              Keni pyetje? Jemi këtu për t'ju ndihmuar. Na shkruani ose na
              telefononi.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="bg-card rounded-xl p-6 shadow-card hover:shadow-hover transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <info.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {info.content}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {info.subContent}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-card rounded-2xl p-8 shadow-card text-center animate-scale-in h-full flex flex-col items-center justify-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    Mesazhi u Dërgua!
                  </h2>
                  <p className="text-muted-foreground mb-6 max-w-md">
                    Faleminderit që na kontaktuat. Ekipi ynë do t'ju përgjigjet
                    brenda 24 orëve.
                  </p>
                  <Button onClick={() => setSubmitted(false)} variant="outline">
                    Dërgo Mesazh Tjetër
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-card rounded-2xl p-6 md:p-8 shadow-card"
                >
                  <h2 className="font-display text-xl font-semibold mb-6">
                    Dërgoni Mesazh
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Emri i Plotë *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Shkruani emrin"
                        className={errors.name ? "border-destructive" : ""}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive">{errors.name}</p>
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
                  </div>

                  <div className="space-y-2 mb-6">
                    <Label htmlFor="subject">Subjekti *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleChange("subject", e.target.value)}
                      placeholder="Tema e mesazhit"
                      className={errors.subject ? "border-destructive" : ""}
                    />
                    {errors.subject && (
                      <p className="text-sm text-destructive">{errors.subject}</p>
                    )}
                  </div>

                  <div className="space-y-2 mb-6">
                    <Label htmlFor="message">Mesazhi *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Shkruani mesazhin tuaj këtu..."
                      rows={5}
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive">{errors.message}</p>
                    )}
                  </div>

                  <Button type="submit" size="lg" className="w-full shadow-hover">
                    <Send className="mr-2 h-5 w-5" />
                    Dërgo Mesazhin
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-12">
            <div className="bg-card rounded-2xl overflow-hidden shadow-card">
              <div className="aspect-[21/9] bg-muted relative">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      Na Gjeni në Hartë
                    </h3>
                    <p className="text-muted-foreground">
                      Rruga "Dritan Hoxha", Nr. 45, Tiranë
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Kontakt;
