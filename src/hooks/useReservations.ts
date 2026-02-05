import { useMutation } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface ReservationData {
  car_id: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  pickup_date: string;
  return_date: string;
  pickup_location: string;
  notes?: string;
  total_price?: number;
}

export const useCreateReservation = () => {
  return useMutation({
    mutationFn: async (data: ReservationData) => {
      const { data: reservation, error } = await supabase
        .from("reservations")
        .insert([data])
        .select()
        .single();

      if (error) {
        console.error("Error creating reservation:", error);
        throw error;
      }

      return reservation;
    },
  });
};
