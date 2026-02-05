import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Car } from "@/hooks/useCars";
import { Users, Fuel, Settings, ArrowRight } from "lucide-react";

interface CarCardProps {
  car: Car;
  index?: number;
}

export const CarCard = ({ car, index = 0 }: CarCardProps) => {
  return (
    <div
      className="group relative bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image container */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Type badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 rounded-lg gradient-primary text-white text-xs font-semibold shadow-primary">
            {car.type}
          </span>
        </div>

        {/* Year badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-sm text-foreground text-xs font-semibold">
            {car.year}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
            {car.brand}
          </p>
          <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
            {car.name}
          </h3>
        </div>

        {/* Features */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-5">
          <div className="flex items-center gap-1.5">
            <Users className="h-4 w-4 text-primary/70" />
            <span>{car.seats}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Settings className="h-4 w-4 text-primary/70" />
            <span>{car.transmission}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Fuel className="h-4 w-4 text-primary/70" />
            <span>{car.fuel}</span>
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-5 border-t border-border">
          <div>
            <span className="font-display text-2xl font-bold gradient-text">
              €{car.price}
            </span>
            <span className="text-muted-foreground text-sm">/ditë</span>
          </div>
          <Button
            asChild
            size="sm"
            className="rounded-xl gradient-primary shadow-sm hover:shadow-primary transition-all duration-300 group/btn"
          >
            <Link to={`/rezervim?makina=${car.id}`}>
              Rezervo
              <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Hover border effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 premium-border pointer-events-none" />
    </div>
  );
};
