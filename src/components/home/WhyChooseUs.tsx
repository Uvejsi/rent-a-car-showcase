import { Shield, Clock, Wallet, HeadphonesIcon, MapPin, Car, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Siguri Premium",
    description:
      "Sigurim i plotë dhe kontroll rigoroz për çdo automjet të flotës.",
  },
  {
    icon: Wallet,
    title: "Çmime Transparente",
    description:
      "Asnjë kost e fshehur. Çmime konkurruese me vlerë maksimale.",
  },
  {
    icon: Clock,
    title: "Rezervim në Sekonda",
    description:
      "Procesi më i thjeshtë i rezervimit online ose me telefon.",
  },
  {
    icon: HeadphonesIcon,
    title: "Konciergje 24/7",
    description:
      "Asistencë e dedikuar në çdo orë të ditës dhe natës.",
  },
  {
    icon: MapPin,
    title: "Dorëzim VIP",
    description:
      "Marrje dhe dorëzim në lokacionin tuaj, pa asnjë kost shtesë.",
  },
  {
    icon: Car,
    title: "Flotë Ekskluzive",
    description:
      "Nga sedanë elegante tek SUV të fuqishëm për çdo rast.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -translate-y-1/2" />

      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Shield className="h-4 w-4" />
            Përse Elite RENT
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Standardi i Ri i
            <span className="gradient-text"> Ekskluzivitetit</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Me mbi një dekadë eksperiencë, kemi përsosur çdo aspekt të shërbimit
            për ta bërë udhëtimin tuaj të paharrueshëm.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              
              {/* Border gradient on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 premium-border" />

              <div className="relative">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 group-hover:shadow-primary transition-all duration-300">
                  <feature.icon className="h-7 w-7" />
                </div>
                
                <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {feature.description}
                </p>

                <div className="flex items-center text-primary font-medium text-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Mëso më shumë
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
