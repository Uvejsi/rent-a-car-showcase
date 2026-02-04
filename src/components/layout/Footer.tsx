import { Link } from "react-router-dom";
import { Sparkles, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-noise opacity-[0.03]" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />

      <div className="container relative py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="gradient-primary p-2.5 rounded-xl">
                <Sparkles className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl text-white">
                  Elite<span className="text-primary">RENT</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-medium">
                  Premium Cars
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Eksperienca premium e qerasë së makinave në Shqipëri. Flota
              ekskluzive, shërbim i përsosusr.
            </p>
            <div className="flex gap-3">
              {["facebook", "instagram", "twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 rounded-full bg-white/40" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-white mb-6">
              Navigimi
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Ballina", href: "/" },
                { name: "Flota", href: "/makina" },
                { name: "Rezervim", href: "/rezervim" },
                { name: "Rreth Nesh", href: "/rreth-nesh" },
                { name: "Kontakt", href: "/kontakt" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-white mb-6">
              Shërbimet
            </h3>
            <ul className="space-y-4 text-white/60 text-sm">
              {[
                "Makina Ekonomike",
                "Makina Premium",
                "SUV Luksoz",
                "Transferim VIP",
                "Qera Afatgjatë",
              ].map((service) => (
                <li key={service} className="hover:text-white transition-colors cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-white mb-6">
              Kontakt
            </h3>
            <ul className="space-y-5">
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-0.5">Telefon</p>
                  <p className="text-white text-sm">+355 69 123 4567</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-0.5">Email</p>
                  <p className="text-white text-sm">info@eliterent.al</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-0.5">Adresa</p>
                  <p className="text-white text-sm">
                    Rruga "Dritan Hoxha", Nr. 45
                    <br />
                    Tiranë, Shqipëri
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2024 Elite RENT. Të gjitha të drejtat e rezervuara.
          </p>
          <div className="flex gap-6 text-white/40 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              Kushtet e Përdorimit
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privatësia
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
