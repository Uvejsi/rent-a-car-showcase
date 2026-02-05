import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ReservationEmailRequest {
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  car_name: string;
  car_brand: string;
  pickup_date: string;
  return_date: string;
  pickup_location: string;
  total_price: number;
  notes?: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("📧 send-reservation-email function called");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: ReservationEmailRequest = await req.json();
    console.log("📋 Reservation data received:", JSON.stringify(data, null, 2));

    // Validate required fields
    if (!data.customer_name || !data.pickup_date || !data.return_date) {
      console.error("❌ Missing required fields");
      throw new Error("Missing required fields: customer_name, pickup_date, or return_date");
    }

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5; margin: 0; padding: 20px; }
          .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
          .header { background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); color: white; padding: 30px; text-align: center; }
          .header h1 { margin: 0; font-size: 28px; }
          .header p { margin: 10px 0 0; opacity: 0.9; }
          .content { padding: 30px; }
          .info-card { background: #f8fafc; border-radius: 12px; padding: 20px; margin-bottom: 20px; }
          .info-row { display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #e2e8f0; }
          .info-row:last-child { border-bottom: none; }
          .info-label { color: #64748b; font-size: 14px; }
          .info-value { color: #1e293b; font-weight: 600; }
          .car-info { background: linear-gradient(135deg, #1e293b 0%, #334155 100%); color: white; border-radius: 12px; padding: 20px; margin-bottom: 20px; }
          .car-name { font-size: 20px; font-weight: bold; margin-bottom: 5px; }
          .car-brand { opacity: 0.8; }
          .price-tag { background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; border-radius: 12px; padding: 20px; text-align: center; }
          .price-value { font-size: 32px; font-weight: bold; }
          .price-label { opacity: 0.9; margin-top: 5px; }
          .footer { background: #f8fafc; padding: 20px; text-align: center; color: #64748b; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🚗 Rezervim i Ri!</h1>
            <p>Elite RENT - Premium Cars</p>
          </div>
          
          <div class="content">
            <div class="car-info">
              <div class="car-name">${data.car_name || 'N/A'}</div>
              <div class="car-brand">${data.car_brand || ''}</div>
            </div>

            <div class="info-card">
              <h3 style="margin-top: 0; color: #1e293b;">👤 Të Dhënat e Klientit</h3>
              <div class="info-row">
                <span class="info-label">Emri i Plotë</span>
                <span class="info-value">${data.customer_name}</span>
              </div>
              <div class="info-row">
                <span class="info-label">Email</span>
                <span class="info-value">${data.customer_email || 'N/A'}</span>
              </div>
              <div class="info-row">
                <span class="info-label">Telefon</span>
                <span class="info-value">${data.customer_phone || 'N/A'}</span>
              </div>
            </div>

            <div class="info-card">
              <h3 style="margin-top: 0; color: #1e293b;">📅 Detajet e Rezervimit</h3>
              <div class="info-row">
                <span class="info-label">Data e Marrjes</span>
                <span class="info-value">${new Date(data.pickup_date).toLocaleDateString('sq-AL', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div class="info-row">
                <span class="info-label">Data e Kthimit</span>
                <span class="info-value">${new Date(data.return_date).toLocaleDateString('sq-AL', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div class="info-row">
                <span class="info-label">Lokacioni i Marrjes</span>
                <span class="info-value">${data.pickup_location || 'Tiranë'}</span>
              </div>
              ${data.notes ? `
              <div class="info-row">
                <span class="info-label">Shënime</span>
                <span class="info-value">${data.notes}</span>
              </div>
              ` : ''}
            </div>

            <div class="price-tag">
              <div class="price-value">€${data.total_price || 0}</div>
              <div class="price-label">Çmimi Total</div>
            </div>
          </div>

          <div class="footer">
            <p>Ky email u gjenerua automatikisht nga sistemi i Elite RENT.</p>
            <p>© ${new Date().getFullYear()} Elite RENT - Premium Cars</p>
          </div>
        </div>
      </body>
      </html>
    `;

    console.log("📤 Sending email to uvejs.ademi@umib.net...");

    const emailResponse = await resend.emails.send({
      from: "Elite RENT <onboarding@resend.dev>",
      to: ["uvejs.ademi@umib.net"],
      subject: `Rezervim i ri - ${data.customer_name} | ${data.car_name || 'Makinë'}`,
      html: emailHtml,
    });

    console.log("✅ Email sent successfully:", JSON.stringify(emailResponse));

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("❌ Error in send-reservation-email:", error.message);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
