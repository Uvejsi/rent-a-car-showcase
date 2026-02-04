import { Link } from "react-router-dom";
import { Car, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg">
                <Car className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl">AutoRent</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Ofrojmë makinat më të mira me qera në Shqipëri. Shërbim i
              shkëlqyer dhe çmime konkurruese.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-lg bg-muted/10 hover:bg-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-muted/10 hover:bg-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-muted/10 hover:bg-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">
              Lidhje të Shpejta
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Ballina", href: "/" },
                { name: "Makinat", href: "/makina" },
                { name: "Rezervim", href: "/rezervim" },
                { name: "Rreth Nesh", href: "/rreth-nesh" },
                { name: "Kontakt", href: "/kontakt" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">
              Shërbimet
            </h3>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li>Makina Ekonomike</li>
              <li>Makina Luksoze</li>
              <li>SUV & 4x4</li>
              <li>Transferime Aeroporti</li>
              <li>Qera Afatgjatë</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone className="h-5 w-5 text-primary" />
                +355 69 123 4567
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail className="h-5 w-5 text-primary" />
                info@autorent.al
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                Rruga "Dritan Hoxha", Nr. 45, Tiranë, Shqipëri
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted/20 mt-12 pt-8 text-center text-muted-foreground text-sm">
          <p>© 2024 AutoRent. Të gjitha të drejtat e rezervuara.</p>
        </div>
      </div>
    </footer>
  );
};
