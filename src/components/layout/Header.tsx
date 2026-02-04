import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Ballina", href: "/" },
  { name: "Flota", href: "/makina" },
  { name: "Rezervim", href: "/rezervim" },
  { name: "Rreth Nesh", href: "/rreth-nesh" },
  { name: "Kontakt", href: "/kontakt" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-card shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="gradient-primary p-2.5 rounded-xl shadow-primary transition-transform group-hover:scale-110">
              <Sparkles className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="absolute inset-0 gradient-primary rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl tracking-tight text-foreground">
              Elite<span className="gradient-text">RENT</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
              Premium Cars
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                location.pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.name}
              {location.pathname === item.href && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button
            asChild
            className="gradient-primary shadow-primary hover:shadow-glow transition-all duration-300 rounded-xl px-6 shine-effect"
          >
            <Link to="/rezervim">
              <Sparkles className="mr-2 h-4 w-4" />
              Rezervo Tani
            </Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2.5 rounded-xl hover:bg-muted transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-card border-t border-border/50 animate-slide-down">
          <div className="container py-6 flex flex-col gap-2">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-5 py-3.5 rounded-xl text-sm font-medium transition-all duration-300 animate-slide-up ${
                  location.pathname === item.href
                    ? "gradient-primary text-primary-foreground shadow-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {item.name}
              </Link>
            ))}
            <Button
              asChild
              className="mt-4 gradient-primary shadow-primary rounded-xl animate-slide-up"
              style={{ animationDelay: "0.25s" }}
            >
              <Link to="/rezervim" onClick={() => setMobileMenuOpen(false)}>
                <Sparkles className="mr-2 h-4 w-4" />
                Rezervo Tani
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
