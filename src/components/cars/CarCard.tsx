import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Car } from "@/data/cars";
import { Users, Fuel, Settings } from "lucide-react";

interface CarCardProps {
  car: Car;
  index?: number;
}

export const CarCard = ({ car, index = 0 }: CarCardProps) => {
  return (
    <div
      className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
            {car.type}
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="mb-3">
          <p className="text-xs text-muted-foreground uppercase tracking-wider">
            {car.brand}
          </p>
          <h3 className="font-display text-lg font-semibold text-foreground">
            {car.name}
          </h3>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1.5">
            <Users className="h-4 w-4" />
            <span>{car.seats}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Settings className="h-4 w-4" />
            <span>{car.transmission}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Fuel className="h-4 w-4" />
            <span>{car.fuel}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <span className="font-display text-2xl font-bold text-primary">
              €{car.price}
            </span>
            <span className="text-sm text-muted-foreground">/ditë</span>
          </div>
          <Button asChild size="sm">
            <Link to={`/rezervim?makina=${car.id}`}>Rezervo</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
