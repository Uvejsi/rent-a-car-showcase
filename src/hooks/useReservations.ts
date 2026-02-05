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
  car_name?: string;
  car_brand?: string;
}

export const useCreateReservation = () => {
  return useMutation({
    mutationFn: async (data: ReservationData) => {
      // Create reservation in database
      const { data: reservation, error } = await supabase
        .from("reservations")
        .insert([{
          car_id: data.car_id,
          customer_name: data.customer_name,
          customer_email: data.customer_email,
          customer_phone: data.customer_phone,
          pickup_date: data.pickup_date,
          return_date: data.return_date,
          pickup_location: data.pickup_location,
          notes: data.notes,
          total_price: data.total_price,
        }])
        .select()
        .single();

      if (error) {
        console.error("Error creating reservation:", error);
        throw error;
      }

      // Send email notification
      try {
        console.log("📧 Sending email notification...");
        const emailResponse = await supabase.functions.invoke("send-reservation-email", {
          body: {
            customer_name: data.customer_name,
            customer_email: data.customer_email,
            customer_phone: data.customer_phone,
            car_name: data.car_name || "Makinë",
            car_brand: data.car_brand || "",
            pickup_date: data.pickup_date,
            return_date: data.return_date,
            pickup_location: data.pickup_location,
            total_price: data.total_price || 0,
            notes: data.notes,
          },
        });
        
        if (emailResponse.error) {
          console.error("Email notification failed:", emailResponse.error);
        } else {
          console.log("✅ Email notification sent successfully");
        }
      } catch (emailError) {
        console.error("Failed to send email notification:", emailError);
        // Don't throw - reservation was successful, email is secondary
      }

      return reservation;
    },
  });
};
