import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CarCard } from "@/components/cars/CarCard";
import { useCars, Car } from "@/hooks/useCars";
import { cars as fallbackCars } from "@/data/cars";
import { ArrowRight, Sparkles, Loader2 } from "lucide-react";
import { useMemo } from "react";

export const FeaturedCars = () => {
  const { data: dbCars, isLoading } = useCars();
  
  const featuredCars = useMemo(() => {
    if (dbCars && dbCars.length > 0) {
      return dbCars.slice(0, 4);
    }
    return fallbackCars.slice(0, 4).map(car => ({
      ...car,
      id: car.id.toString(),
      available: true,
      description: null
    })) as Car[];
  }, [dbCars]);

  return (
    <section className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="container relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              Flota Ekskluzive
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Makinat e
              <span className="gradient-text"> Zgjedhura</span>
            </h2>
          </div>
          <Button
            asChild
            variant="outline"
            className="w-fit rounded-xl px-6 group border-2 hover:border-primary hover:bg-primary/5"
          >
            <Link to="/makina">
              Shiko Të Gjitha
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading ? (
            [1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-card rounded-2xl p-4 animate-pulse">
                <div className="aspect-[4/3] bg-muted rounded-xl mb-4" />
                <div className="h-4 bg-muted rounded w-3/4 mb-2" />
                <div className="h-4 bg-muted rounded w-1/2" />
              </div>
            ))
          ) : (
            featuredCars.map((car, index) => (
              <CarCard key={car.id} car={car} index={index} />
            ))
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-20 relative">
          <div className="gradient-hero rounded-3xl p-10 lg:p-16 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-noise opacity-[0.03]" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                  Gati për Aventurën Tuaj?
                </h3>
                <p className="text-white/60 text-lg max-w-md">
                  Rezervoni makinën tuaj të ëndrrave tani dhe përfitoni 10%
                  zbritje për rezervimin e parë.
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-white text-foreground hover:bg-white/90 rounded-xl px-8 h-14 shadow-xl shine-effect group"
              >
                <Link to="/rezervim">
                  Rezervo me Zbritje
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
