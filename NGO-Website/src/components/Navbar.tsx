import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Sun, Moon } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { useTheme } from '@/hooks/useTheme';
import { useFontSize } from '@/hooks/useFontSize';
import logo from "@/assets/logo.png";


export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(() => (typeof window !== 'undefined' ? window.innerWidth : 0));
  const { language, setLanguage, t } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const { fontScale, increase, decrease } = useFontSize();
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
  const effectiveWidth = windowWidth / Math.max(fontScale, 1);
  const shouldUseDesktopNav = effectiveWidth >= 1260 && fontScale <= 1.05;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, shouldUseDesktopNav]);

  useEffect(() => {
    if (!mobileOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [mobileOpen]);

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 bg-transparent"
    >
      <div className="mx-auto w-[min(96.5vw,1700px)] px-2 sm:px-4 md:px-5 lg:px-6 xl:px-8 pt-2 sm:pt-3">
        <div className="rounded-2xl border border-slate-200/70 dark:border-white/25 bg-white/70 dark:bg-slate-900/45 text-slate-900 dark:text-white shadow-[0_10px_30px_rgba(8,7,35,0.16)] dark:shadow-[0_10px_30px_rgba(8,7,35,0.35)] backdrop-blur-2xl">
          <div className="flex items-center justify-between py-2 sm:py-3 md:py-3.5 px-2 sm:px-4 md:px-5 gap-1 sm:gap-3 md:gap-4 xl:gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1.5 min-w-0 flex-shrink">
            <img
                src={logo}
                alt="AIOOP Logo"
                className="h-10 sm:h-12 md:h-16 w-auto"
              />
            <div className="min-w-0 max-w-[8.5rem] sm:max-w-none">
              <h1 className="font-display font-bold text-base sm:text-lg md:text-xl text-slate-900 dark:text-white leading-tight truncate">
                {shouldUseDesktopNav ? t.nav.orgName : 'AIOOP'}
              </h1>
              <p className={`text-xs md:text-sm text-slate-600 dark:text-white/70 truncate ${shouldUseDesktopNav ? 'hidden lg:block' : 'hidden'}`}>
                {t.nav.tagline}
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          {shouldUseDesktopNav && (
            <div className="flex-1 flex items-center justify-center gap-1">
              {links.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2 rounded-lg text-base md:text-[1.05rem] font-semibold transition-colors ${
                    isActive(link.to)
                      ? 'text-primary dark:text-lime-300'
                      : 'text-slate-700 dark:text-white/80 hover:text-slate-900 dark:hover:text-white hover:bg-slate-900/5 dark:hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          {/* Right actions */}
          <div className="flex items-center gap-1 sm:gap-1.5 md:gap-3 shrink-0">
            {/* Accessibility controls group */}
            <div
              className={`flex items-center gap-1 rounded-xl border border-slate-300/70 dark:border-white/20 bg-white/60 dark:bg-white/10 backdrop-blur-sm hover:bg-white/75 dark:hover:bg-white/15 transition-colors ${
                shouldUseDesktopNav ? 'px-2 sm:px-2.5 md:px-3 py-2' : 'px-1.5 py-1'
              }`}
            >
                <button
                  onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
                  className="inline-flex items-center rounded overflow-hidden border border-slate-300/80 dark:border-white/20 transition-colors hover:bg-slate-900/5 dark:hover:bg-white/10"
                  aria-label="Toggle language"
                >
                  <span className={`px-1 sm:px-1.5 py-0.5 font-bold text-sm transition-colors ${language === 'en' ? 'bg-slate-900/10 text-slate-900 dark:bg-white/20 dark:text-white' : 'bg-transparent text-slate-600 dark:text-white/70'}`}>
                    A
                  </span>
                  <span className={`px-1 sm:px-1.5 py-0.5 font-bold text-sm transition-colors ${language === 'hi' ? 'bg-primary text-primary-foreground' : 'bg-transparent text-slate-600 dark:text-white/70'}`}>
                    अ
                  </span>
                </button>
                <button
                  onClick={increase}
                  className="p-1 sm:p-1.5 rounded text-slate-700 dark:text-white/75 hover:text-slate-900 dark:hover:text-white hover:bg-slate-900/5 dark:hover:bg-white/10 transition-colors font-medium"
                  aria-label="Increase font size"
                >
                  <span className="text-sm block">A+</span>
                </button>
                <button
                  onClick={decrease}
                  className="p-1 sm:p-1.5 rounded text-slate-700 dark:text-white/75 hover:text-slate-900 dark:hover:text-white hover:bg-slate-900/5 dark:hover:bg-white/10 transition-colors font-medium"
                  aria-label="Decrease font size"
                >
                  <span className="text-sm block">A-</span>
                </button>
                <button
                  onClick={toggleTheme}
                  className="p-1 sm:p-1.5 rounded text-slate-700 dark:text-white/75 hover:text-slate-900 dark:hover:text-white hover:bg-slate-900/5 dark:hover:bg-white/10 transition-colors"
                  aria-label="Toggle theme"
                >
                  {isDark ? <Sun className="w-4 h-4 sm:w-[18px] sm:h-[18px]" /> : <Moon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />}
                </button>
            </div>
            {shouldUseDesktopNav ? (
              <Link
                to="/contact"
                className="flex items-center gap-1.5 px-3.5 md:px-4 py-2.5 rounded-2xl bg-primary text-primary-foreground font-semibold text-xs md:text-sm hover:shadow-lg hover:bg-primary/90 transition-all shrink-0"
              >
                <Phone className="w-4 h-4" />
                <span>{t.nav.help}</span>
              </Link>
            ) : (
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-1.5 sm:p-2 rounded-lg border border-slate-300/80 dark:border-white/20 text-slate-700 dark:text-white/85 hover:text-slate-900 dark:hover:text-white hover:bg-slate-900/5 dark:hover:bg-white/10 shrink-0"
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
                aria-controls="mobile-navigation-menu"
              >
                {mobileOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Nav */}
        {!shouldUseDesktopNav && mobileOpen && (
          <div id="mobile-navigation-menu" className="pb-4 sm:pb-5 px-3 sm:px-4 md:px-5 border-t border-slate-300/70 dark:border-white/15 pt-3 sm:pt-4">
            <div className="flex flex-col gap-1">
              {links.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-lg text-body-md font-medium transition-colors ${
                    isActive(link.to)
                      ? 'bg-primary/15 text-primary dark:bg-white/20 dark:text-lime-300'
                      : 'text-slate-700 dark:text-white/80 hover:text-slate-900 dark:hover:text-white hover:bg-slate-900/5 dark:hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{t.nav.help}</span>
            </Link>
          </div>
        )}
        </div>
      </div>
    </nav>
  );
}
