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
  Sparkles,
  ArrowRight,
  MessageCircle,
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

  const handleChange = (field: keyof FormData, value: string) => {
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
      subContent: "24/7 Disponibël",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@eliterent.al",
      subContent: "Përgjigje brenda 2h",
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
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        
        <div className="container relative">
          <div className="text-center max-w-3xl mx-auto animate-slide-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white/80 text-sm font-medium mb-6">
              <MessageCircle className="h-4 w-4" />
              Jemi Këtu për Ju
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Na
              <span className="gradient-text"> Kontaktoni</span>
            </h1>
            <p className="text-white/60 text-lg">
              Keni pyetje? Ekipi ynë është i gatshëm t'ju ndihmojë 24/7.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Main Content */}
      <section className="py-12 -mt-16 relative z-10">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className="group bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-right"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-primary flex-shrink-0 group-hover:scale-110 transition-transform">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h3>
                      <p className="text-foreground font-medium text-sm">
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
                <div className="bg-card rounded-3xl p-10 shadow-xl text-center h-full flex flex-col items-center justify-center animate-scale-in relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                  
                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full gradient-primary shadow-primary mb-8">
                      <CheckCircle2 className="h-12 w-12 text-white" />
                    </div>
                    <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                      Mesazhi u Dërgua!
                    </h2>
                    <p className="text-muted-foreground mb-8 text-lg max-w-md mx-auto">
                      Ekipi ynë do t'ju përgjigjet brenda 2 orëve.
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      variant="outline"
                      className="rounded-xl"
                    >
                      Dërgo Mesazh Tjetër
                    </Button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-card rounded-3xl p-8 md:p-10 shadow-xl animate-slide-left"
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-2.5 rounded-xl gradient-primary shadow-primary">
                      <Send className="h-5 w-5 text-white" />
                    </div>
                    <h2 className="font-display text-xl font-semibold">
                      Dërgoni Mesazh
                    </h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5 mb-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Emri i Plotë *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Shkruani emrin"
                        className={`h-12 rounded-xl ${errors.name ? "border-destructive" : ""}`}
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
                        className={`h-12 rounded-xl ${errors.email ? "border-destructive" : ""}`}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2 mb-5">
                    <Label htmlFor="subject">Subjekti *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleChange("subject", e.target.value)}
                      placeholder="Tema e mesazhit"
                      className={`h-12 rounded-xl ${errors.subject ? "border-destructive" : ""}`}
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
                      className={`rounded-xl resize-none ${errors.message ? "border-destructive" : ""}`}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gradient-primary shadow-primary hover:shadow-glow transition-all duration-300 rounded-xl h-14 shine-effect group"
                  >
                    Dërgo Mesazhin
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-card rounded-3xl overflow-hidden shadow-xl">
              <div className="aspect-[21/9] bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 relative">
                {/* Decorative grid */}
                <div 
                  className="absolute inset-0 opacity-[0.15]"
                  style={{
                    backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), 
                                     linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                  }}
                />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl gradient-primary shadow-primary mb-6">
                      <MapPin className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                      Na Vizitoni
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      Rruga "Dritan Hoxha", Nr. 45, Tiranë, Shqipëri
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
