import { Layout } from "@/components/layout/Layout";
import { Target, Eye, Users, Award, TrendingUp, Heart } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Përkushtim",
    description: "Jemi të përkushtuar për të ofruar shërbimin më të mirë.",
  },
  {
    icon: Award,
    title: "Kualitet",
    description: "Makina të mirëmbajtura dhe shërbim i klasit të parë.",
  },
  {
    icon: TrendingUp,
    title: "Inovacion",
    description: "Përdorim teknologjitë më të reja për shërbim të lehtë.",
  },
];

const RrethNesh = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Rreth Nesh
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              Historia Jonë e Suksesit
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Që nga viti 2014, AutoRent ka qenë lider në tregun e makinave me
              qera në Shqipëri, duke ofruar shërbim të shkëlqyer dhe makina
              cilësore për mijëra klientë.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop"
                alt="Ekipi ynë"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-display text-3xl font-bold text-foreground">
                Si Filloi Gjithçka
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                AutoRent u themelua në vitin 2014 me vetëm 5 makina dhe një ëndërr
                të madhe: të ofronte shërbimin më të mirë të makinave me qera në
                Shqipëri. Sot, pas 10 viteve pune të palodhur, kemi arritur të
                bëhemi një nga kompanitë lider në treg.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Flota jonë ka rritur nga 5 në mbi 50 makina, duke përfshirë
                modele ekonomike, luksoze dhe SUV. Çdo ditë punojmë fort për të
                përmirësuar shërbimet tona dhe për të siguruar që çdo klient të
                ketë një eksperiencë të paharrueshme.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div>
                  <div className="font-display text-3xl font-bold text-primary">
                    10+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Vite Eksperiencë
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
                    15
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Punonjës
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6">
                <Target className="h-7 w-7" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Misioni Ynë
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Misioni ynë është të ofrojmë shërbimin më të besueshëm dhe
                cilësor të makinave me qera, duke siguruar që çdo klient të ketë
                qasje në makina moderne, të sigurta dhe me çmime të arsyeshme.
                Synojmë të bëjmë udhëtimin tuaj sa më të lehtë dhe të këndshëm.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6">
                <Eye className="h-7 w-7" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Vizioni Ynë
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Vizioni ynë është të bëhemi kompania lider e shërbimeve të
                makinave me qera në rajon, duke përdorur teknologjitë më të
                avancuara dhe duke ofruar një gamë të gjerë makinash për çdo
                lloj nevoje dhe buxheti të klientëve tanë.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Vlerat Tona
            </h2>
            <p className="text-muted-foreground">
              Këto janë parimet që na udhëheqin çdo ditë në punën tonë.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-8 rounded-2xl bg-card shadow-card hover:shadow-hover transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ekipi Ynë
            </h2>
            <p className="text-muted-foreground">
              Prapa suksesit tonë qëndron një ekip i përkushtuar profesionistësh.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="inline-flex items-center gap-4 p-6 bg-card rounded-2xl shadow-card">
              <div className="bg-primary/10 p-4 rounded-full">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-primary">
                  15+ Profesionistë
                </div>
                <div className="text-muted-foreground">
                  Të gatshëm për t'ju shërbyer
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
