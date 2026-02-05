import { useMutation } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface ContactMessageData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const useCreateContactMessage = () => {
  return useMutation({
    mutationFn: async (data: ContactMessageData) => {
      const { data: message, error } = await supabase
        .from("contact_messages")
        .insert([data])
        .select()
        .single();

      if (error) {
        console.error("Error sending contact message:", error);
        throw error;
      }

      return message;
    },
  });
};
