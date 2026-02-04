import { useState, useMemo } from "react";
import { Layout } from "@/components/layout/Layout";
import { CarCard } from "@/components/cars/CarCard";
import { cars, carTypes } from "@/data/cars";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

const Makina = () => {
  const [selectedType, setSelectedType] = useState("Të gjitha");
  const [priceRange, setPriceRange] = useState([0, 150]);

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      const typeMatch =
        selectedType === "Të gjitha" || car.type === selectedType;
      const priceMatch = car.price >= priceRange[0] && car.price <= priceRange[1];
      return typeMatch && priceMatch;
    });
  }, [selectedType, priceRange]);

  return (
    <Layout>
      <section className="py-12 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Makinat Tona
            </h1>
            <p className="text-muted-foreground text-lg">
              Zgjidhni makinën që i përshtatet më mirë nevojave tuaja nga flota
              jonë e gjerë.
            </p>
          </div>

          {/* Filters */}
          <div className="bg-card rounded-2xl p-6 shadow-card mb-10">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Type Filter */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">
                  Tipi i Makinës
                </h3>
                <div className="flex flex-wrap gap-2">
                  {carTypes.map((type) => (
                    <Button
                      key={type}
                      variant={selectedType === type ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedType(type)}
                    >
                      {type}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">
                  Çmimi për Ditë: €{priceRange[0]} - €{priceRange[1]}
                </h3>
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

          {/* Results */}
          <div className="mb-6 text-muted-foreground">
            {filteredCars.length} makina të gjetura
          </div>

          {/* Cars Grid */}
          {filteredCars.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCars.map((car, index) => (
                <CarCard key={car.id} car={car} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Nuk u gjetën makina me këto kritere. Provoni të ndryshoni filtrat.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Makina;
