import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-display font-bold text-2xl text-primary mb-4">{t.nav.orgName}</h3>
            <p className="text-muted-foreground text-body-md leading-relaxed">{t.footer.desc}</p>
          </div>
          <div>
            <h4 className="font-display font-bold text-xl mb-4">{t.footer.quickLinks}</h4>
            <div className="flex flex-col gap-3">
              <Link to="/activities" className="text-muted-foreground hover:text-primary transition-colors text-body-md">{t.nav.activities}</Link>
              <Link to="/notices" className="text-muted-foreground hover:text-primary transition-colors text-body-md">{t.nav.notices}</Link>
              <Link to="/facilities" className="text-muted-foreground hover:text-primary transition-colors text-body-md">{t.nav.facilities}</Link>
              <Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors text-body-md">{t.nav.gallery}</Link>
            </div>
          </div>
          <div>
            <h4 className="font-display font-bold text-xl mb-4">{t.footer.contactUs}</h4>
            <div className="flex flex-col gap-4 text-muted-foreground text-body-md">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-primary shrink-0" />
                <span>{t.contact.address}</span>
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
        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
