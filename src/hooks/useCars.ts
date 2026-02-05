import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface Car {
  id: string;
  name: string;
  brand: string;
  type: string;
  price: number;
  image: string;
  seats: number;
  transmission: string;
  fuel: string;
  year: number;
  available: boolean;
  description: string | null;
}

export const useCars = () => {
  return useQuery({
    queryKey: ["cars"],
    queryFn: async (): Promise<Car[]> => {
      const { data, error } = await supabase
        .from("cars")
        .select("*")
        .eq("available", true)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching cars:", error);
        throw error;
      }

      return data || [];
    },
  });
};

export const useCarById = (carId: string | null) => {
  return useQuery({
    queryKey: ["car", carId],
    queryFn: async (): Promise<Car | null> => {
      if (!carId) return null;

      const { data, error } = await supabase
        .from("cars")
        .select("*")
        .eq("id", carId)
        .single();

      if (error) {
        console.error("Error fetching car:", error);
        return null;
      }

      return data;
    },
    enabled: !!carId,
  });
};

export const carTypes = ["Të gjitha", "Ekonomik", "Kompakt", "Luksoz", "SUV"];
