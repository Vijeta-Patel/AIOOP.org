import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          <div>
            <h3 className="font-display font-bold text-xl md:text-2xl text-primary mb-4 md:mb-6">{t.nav.orgName}</h3>
            <p className="text-muted-foreground text-sm md:text-body-md leading-relaxed">{t.footer.desc}</p>
          </div>
          <div>
            <h4 className="font-display font-bold text-lg md:text-xl mb-4 md:mb-6">{t.footer.quickLinks}</h4>
            <div className="flex flex-col gap-3 md:gap-4">
              <Link to="/activities" className="text-muted-foreground hover:text-primary transition-colors text-sm md:text-body-md">{t.nav.activities}</Link>
              <Link to="/notices" className="text-muted-foreground hover:text-primary transition-colors text-sm md:text-body-md">{t.nav.notices}</Link>
              <Link to="/facilities" className="text-muted-foreground hover:text-primary transition-colors text-sm md:text-body-md">{t.nav.facilities}</Link>
              <Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors text-sm md:text-body-md">{t.nav.gallery}</Link>
            </div>
          </div>
          <div>
            <h4 className="font-display font-bold text-lg md:text-xl mb-4 md:mb-6">{t.footer.contactUs}</h4>
            <div className="flex flex-col gap-3 md:gap-4 text-muted-foreground text-sm md:text-body-md">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-primary shrink-0" />
                <span className="leading-relaxed">{t.contact.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>{t.contact.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>{t.contact.emailAddress}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-10 md:mt-14 lg:mt-16 pt-6 md:pt-8 lg:pt-10 text-center text-muted-foreground text-xs md:text-sm">
          {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
