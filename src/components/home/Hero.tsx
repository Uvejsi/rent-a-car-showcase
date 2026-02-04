import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Star, ChevronRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-noise opacity-[0.03]" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[150px] floating-element" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[150px] floating-element-delayed" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container relative z-10 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8 animate-slide-down">
              <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white/80 text-sm font-medium">
                Disponueshmëri 24/7
              </span>
              <ChevronRight className="h-4 w-4 text-white/40" />
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-8 animate-slide-up">
              Eksperienca
              <br />
              <span className="gradient-text">Premium</span> e
              <br />
              Udhëtimit
            </h1>

            <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Zbuloni flotën tonë ekskluzive të makinave luksoze dhe përjetoni
              udhëtimin tuaj me stil dhe elegancë të pashembullt.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Button
                asChild
                size="lg"
                className="gradient-primary shadow-primary hover:shadow-glow transition-all duration-300 rounded-xl px-8 h-14 text-base shine-effect group"
              >
                <Link to="/rezervim">
                  Rezervo Tani
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/5 border-white/20 text-white hover:bg-white/10 rounded-xl px-8 h-14 text-base backdrop-blur-sm"
              >
                <Link to="/makina">Eksploro Flotën</Link>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-6 mt-16 pt-10 border-t border-white/10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {[
                { icon: Shield, value: "100%", label: "E Siguruar" },
                { icon: Zap, value: "24/7", label: "Mbështetje" },
                { icon: Star, value: "4.9", label: "Vlerësim" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 text-primary mb-2">
                    <stat.icon className="h-4 w-4" />
                    <span className="font-display text-2xl font-bold text-white">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-white/40 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block animate-slide-left" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Main car image */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop"
                  alt="Makinë Premium"
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-4 gradient-primary rounded-3xl blur-3xl opacity-20 -z-10" />

              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 glass-dark rounded-2xl p-5 animate-slide-up z-20" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-primary">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Rezervim i Shpejtë</p>
                    <p className="text-white/60 text-sm">Vetëm 2 minuta</p>
                  </div>
                </div>
              </div>

              {/* Floating price card */}
              <div className="absolute -top-6 -right-6 glass-dark rounded-2xl p-5 animate-slide-down z-20" style={{ animationDelay: '0.6s' }}>
                <p className="text-white/60 text-xs uppercase tracking-wider mb-1">
                  Duke filluar nga
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-3xl font-bold text-white">€35</span>
                  <span className="text-white/60 text-sm">/ditë</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
