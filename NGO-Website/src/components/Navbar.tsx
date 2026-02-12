import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Sun, Moon } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { useTheme } from '@/hooks/useTheme';
import { useFontSize } from '@/hooks/useFontSize';
import logo from "@/assets/logo.png";


export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const { increase, decrease } = useFontSize();
  const location = useLocation();

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/activities', label: t.nav.activities },
    { to: '/notices', label: t.nav.notices },
    { to: '/facilities', label: t.nav.facilities },
    { to: '/committee', label: t.nav.committee },
    { to: '/gallery', label: t.nav.gallery },
    { to: '/contact', label: t.nav.contact },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-background via-card to-background/80 backdrop-blur-md border-b border-primary/10 shadow-md">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
                src={logo}
                alt="AIOOP Logo"
                className="h-16 w-auto"
              />
            <div>
              <h1 className="font-display font-bold text-xl text-primary leading-tight">{t.nav.orgName}</h1>
              <p className="text-sm text-muted-foreground">{t.nav.tagline}</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-body-md font-medium transition-colors ${
                  isActive(link.to)
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Accessibility controls group */}
            <div className="flex items-center gap-0.5 px-2 py-1 rounded-lg border border-primary/20 bg-muted/40 backdrop-blur-sm hover:bg-muted/60 transition-colors">
              <button
                onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
                className="inline-flex items-center rounded overflow-hidden border border-primary/30 transition-colors hover:bg-muted/80"
                aria-label="Toggle language"
              >
                <span className={`px-1.5 py-0.5 font-bold text-sm transition-colors ${language === 'en' ? 'bg-primary/20 text-primary font-semibold' : 'bg-transparent text-muted-foreground'}`}>
                  A
                </span>
                <span className={`px-1.5 py-0.5 font-bold text-sm transition-colors ${language === 'hi' ? 'bg-primary text-primary-foreground font-semibold' : 'bg-transparent text-muted-foreground'}`}>
                  अ
                </span>
              </button>
              <button
                onClick={increase}
                className="p-1.5 rounded text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors font-medium"
                aria-label="Increase font size"
              >
                <span className="text-xs block">A+</span>
              </button>
              <button
                onClick={decrease}
                className="p-1.5 rounded text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors font-medium"
                aria-label="Decrease font size"
              >
                <span className="text-xs block">A-</span>
              </button>
              <button
                onClick={toggleTheme}
                className="p-1.5 rounded text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>
            <Link
              to="/contact"
              className="hidden md:flex items-center gap-1 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-medium text-xs hover:shadow-lg hover:from-primary/90 hover:to-primary/70 transition-all shrink-0"
            >
              <Phone className="w-4 h-4" />
              {t.nav.help}
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden pb-6 border-t border-border pt-4">
            <div className="flex flex-col gap-1">
              {links.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-lg text-body-md font-medium transition-colors ${
                    isActive(link.to)
                      ? 'bg-accent text-accent-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
