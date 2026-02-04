import { Layout } from "@/components/layout/Layout";
import { Target, Eye, Heart, Award, TrendingUp, Users, Sparkles, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Përkushtim",
    description: "Shërbim i përsosusr me fokus te kënaqësia juaj.",
  },
  {
    icon: Award,
    title: "Ekselencë",
    description: "Makina premium dhe standarde të larta kualiteti.",
  },
  {
    icon: TrendingUp,
    title: "Inovacion",
    description: "Teknologji e avancuar për eksperiencë të shkëlqyer.",
  },
];

const stats = [
  { value: "10+", label: "Vite Eksperiencë" },
  { value: "50+", label: "Makina Premium" },
  { value: "500+", label: "Klientë të Kënaqur" },
  { value: "15", label: "Profesionistë" },
];

const RrethNesh = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />
        
        <div className="container relative">
          <div className="text-center max-w-3xl mx-auto animate-slide-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white/80 text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              Historia Jonë
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Një Dekadë
              <span className="gradient-text"> Ekskluziviteti</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Që nga viti 2014, Elite RENT ka qenë sinonim i shërbimit premium
              të makinave me qera në Shqipëri.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Stats */}
      <section className="py-12 -mt-16 relative z-10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-card rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="font-display text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative animate-slide-right">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop"
                  alt="Ekipi ynë"
                  className="w-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 gradient-primary rounded-3xl blur-3xl opacity-20 -z-10" />
              
              {/* Floating card */}
              <div className="absolute -bottom-8 -right-8 glass-card rounded-2xl p-6 shadow-xl animate-slide-up z-20" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center shadow-primary">
                    <Award className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <p className="font-display text-xl font-bold">Kualitet #1</p>
                    <p className="text-muted-foreground text-sm">Në Shqipëri</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8 animate-slide-left" style={{ animationDelay: '0.2s' }}>
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Rrëfimi Ynë
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Si Filloi
                  <span className="gradient-text"> Gjithçka</span>
                </h2>
              </div>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                Elite RENT u themelua në vitin 2014 me vetëm 5 makina dhe një
                vizion të qartë: të ofronte eksperiencën më premium të qerasë
                së makinave në Shqipëri.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Sot, flota jonë ka rritur në mbi 50 makina premium, duke
                përfshirë modelet më të kërkuara nga Mercedes-Benz, BMW, Audi
                dhe Range Rover. Çdo ditë punojmë për të tejkaluar pritshmëritë
                e klientëve tanë.
              </p>

              <div className="flex items-center gap-3 text-primary font-medium group cursor-pointer">
                Mëso më shumë për flotën tonë
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
        
        <div className="container relative">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="group bg-card rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-primary shadow-primary mb-8">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Misioni Ynë
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Të ofrojmë shërbimin më premium të makinave me qera, ku çdo
                  detaj është menduar për t'ju dhënë eksperiencë të
                  paharrueshme. Synojmë ekselencën në çdo aspekt të udhëtimit
                  tuaj.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="group bg-card rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-primary shadow-primary mb-8">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Vizioni Ynë
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Të bëhemi destinacioni i parë për çdo udhëtar që kërkon
                  luksoz dhe komoditet në Shqipëri. Synojmë të zgjerojmë
                  prezencën tonë në rajon duke ruajtur standardet e larta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Heart className="h-4 w-4" />
              Vlerat Tona
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Çfarë Na
              <span className="gradient-text"> Udhëheq</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group text-center p-10 rounded-3xl bg-card shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl gradient-primary shadow-primary mb-8 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Users className="h-4 w-4" />
              Ekipi Ynë
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Profesionistë të
              <span className="gradient-text"> Përkushtuar</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Prapa çdo eksperience të suksesshme qëndron ekipi ynë i
              përkushtuar, i gatshëm t'ju shërbejë me profesionalizëm.
            </p>
            
            <div className="inline-flex items-center gap-6 p-8 bg-card rounded-3xl shadow-xl">
              <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center shadow-primary">
                <Users className="h-10 w-10 text-white" />
              </div>
              <div className="text-left">
                <div className="font-display text-4xl font-bold gradient-text mb-1">
                  15+ Profesionistë
                </div>
                <div className="text-muted-foreground">
                  Të gatshëm 24/7 për t'ju shërbyer
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RrethNesh;
