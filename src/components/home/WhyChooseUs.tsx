import { Shield, Clock, Wallet, HeadphonesIcon, MapPin, Car } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Siguri Maksimale",
    description:
      "Të gjitha makinat tona janë të siguruara plotësisht dhe kontrollohen rregullisht.",
  },
  {
    icon: Wallet,
    title: "Çmime Konkurruese",
    description:
      "Ofrojmë çmimet më të mira në treg pa kompromis në cilësi.",
  },
  {
    icon: Clock,
    title: "Rezervim i Shpejtë",
    description:
      "Rezervoni makinën tuaj në më pak se 5 minuta, online ose me telefon.",
  },
  {
    icon: HeadphonesIcon,
    title: "Mbështetje 24/7",
    description:
      "Ekipi ynë është gjithmonë i gatshëm t'ju ndihmojë në çdo kohë.",
  },
  {
    icon: MapPin,
    title: "Dorëzim në Vend",
    description:
      "Marrje dhe dorëzim falas në aeroport ose në lokacionin tuaj.",
  },
  {
    icon: Car,
    title: "Flotë e Gjerë",
    description:
      "Zgjidhni nga makina ekonomike deri tek ato luksoze për çdo nevojë.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Përse Ne
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Pse të na Zgjidhni Ne?
          </h2>
          <p className="text-muted-foreground">
            Me mbi 10 vite eksperiencë, ofrojmë shërbimin më të besueshëm të
            makinave me qera në Shqipëri.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
