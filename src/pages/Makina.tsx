import { useState, useMemo } from "react";
import { Layout } from "@/components/layout/Layout";
import { CarCard } from "@/components/cars/CarCard";
import { useCars, carTypes, Car } from "@/hooks/useCars";
import { cars as fallbackCars } from "@/data/cars";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Car as CarIcon, Sparkles, SlidersHorizontal, Loader2 } from "lucide-react";

const Makina = () => {
  const [selectedType, setSelectedType] = useState("Të gjitha");
  const [priceRange, setPriceRange] = useState([0, 150]);
  
  const { data: dbCars, isLoading } = useCars();
  
  // Use database cars if available, otherwise fallback to static data
  const allCars = useMemo(() => {
    if (dbCars && dbCars.length > 0) {
      return dbCars;
    }
    return fallbackCars.map(car => ({
      ...car,
      id: car.id.toString(),
      available: true,
      description: null
    })) as Car[];
  }, [dbCars]);

  const filteredCars = useMemo(() => {
    return allCars.filter((car) => {
      const typeMatch =
        selectedType === "Të gjitha" || car.type === selectedType;
      const priceMatch = car.price >= priceRange[0] && car.price <= priceRange[1];
      return typeMatch && priceMatch;
    });
  }, [allCars, selectedType, priceRange]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        
        <div className="container relative">
          <div className="text-center max-w-3xl mx-auto animate-slide-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white/80 text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              Flota Premium
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Zbuloni Flotën
              <span className="gradient-text"> Ekskluzive</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Zgjidhni nga koleksioni ynë i përzgjedhur i makinave premium për
              çdo rast dhe çdo stil udhëtimi.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Main Content */}
      <section className="py-12 -mt-16 relative z-10">
        <div className="container">
          {/* Filters */}
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl gradient-primary">
                <SlidersHorizontal className="h-5 w-5 text-white" />
              </div>
              <h2 className="font-display text-xl font-semibold">Filtrat</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Type Filter */}
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
                  Tipi i Makinës
                </h3>
                <div className="flex flex-wrap gap-2">
                  {carTypes.map((type) => (
                    <Button
                      key={type}
                      variant={selectedType === type ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedType(type)}
                      className={`rounded-xl transition-all duration-300 ${
                        selectedType === type
                          ? "gradient-primary shadow-primary"
                          : "hover:border-primary hover:text-primary"
                      }`}
                    >
                      {type}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
                  Çmimi për Ditë
                </h3>
                <div className="bg-muted/50 rounded-xl p-4">
                  <div className="flex justify-between mb-3">
                    <span className="text-sm font-medium">€{priceRange[0]}</span>
                    <span className="text-sm font-medium">€{priceRange[1]}</span>
                  </div>
                  <Slider
                    min={0}
                    max={150}
                    step={5}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Results count */}
          <div className="flex items-center gap-2 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CarIcon className="h-5 w-5 text-primary" />
            <span className="text-muted-foreground">
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Duke ngarkuar...
                </span>
              ) : (
                <>
                  <span className="font-semibold text-foreground">{filteredCars.length}</span> makina të gjetura
                </>
              )}
            </span>
          </div>

          {/* Cars Grid */}
          {isLoading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-card rounded-2xl p-4 animate-pulse">
                  <div className="aspect-[4/3] bg-muted rounded-xl mb-4" />
                  <div className="h-4 bg-muted rounded w-3/4 mb-2" />
                  <div className="h-4 bg-muted rounded w-1/2" />
                </div>
              ))}
            </div>
          ) : filteredCars.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCars.map((car, index) => (
                <CarCard key={car.id} car={car} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
                <CarIcon className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">
                Nuk u gjetën makina
              </h3>
              <p className="text-muted-foreground">
                Provoni të ndryshoni filtrat për të gjetur makinën e duhur.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Makina;
