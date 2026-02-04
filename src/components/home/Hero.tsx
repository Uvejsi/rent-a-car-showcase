import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container relative py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              Shërbimi #1 i Rent a Car në Shqipëri
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Udhëtoni me
              <span className="text-primary"> Stil</span> dhe
              <span className="text-primary"> Komoditet</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Zgjidhni nga flota jonë e gjerë makinash moderne dhe përjetoni
              udhëtimin tuaj me siguri dhe rehati maksimale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="shadow-hover group">
                <Link to="/rezervim">
                  Rezervo Tani
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/makina">Shiko Makinat</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              <div>
                <div className="font-display text-3xl font-bold text-primary">
                  500+
                </div>
                <div className="text-sm text-muted-foreground">
                  Klientë të Kënaqur
                </div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-primary">
                  50+
                </div>
                <div className="text-sm text-muted-foreground">
                  Makina në Flotë
                </div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-primary">
                  10+
                </div>
                <div className="text-sm text-muted-foreground">
                  Vite Eksperiencë
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&h=600&fit=crop"
                alt="Makinë luksoze"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
            {/* Floating cards */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-card animate-float z-20">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-sm">24/7 Mbështetje</div>
                  <div className="text-xs text-muted-foreground">
                    Gjithmonë pranë jush
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute -top-6 -right-6 bg-card p-4 rounded-xl shadow-card z-20"
              style={{ animation: "float 3s ease-in-out infinite 0.5s" }}
            >
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Kualitet Premium</div>
                  <div className="text-xs text-muted-foreground">
                    Makina të mirëmbajtura
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
