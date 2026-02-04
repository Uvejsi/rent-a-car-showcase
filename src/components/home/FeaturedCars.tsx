import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CarCard } from "@/components/cars/CarCard";
import { cars } from "@/data/cars";
import { ArrowRight } from "lucide-react";

export const FeaturedCars = () => {
  const featuredCars = cars.slice(0, 4);

  return (
    <section className="py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Flota Jonë
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              Makinat e Preferuara
            </h2>
          </div>
          <Button asChild variant="outline" className="w-fit group">
            <Link to="/makina">
              Shiko Të Gjitha
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCars.map((car, index) => (
            <CarCard key={car.id} car={car} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
