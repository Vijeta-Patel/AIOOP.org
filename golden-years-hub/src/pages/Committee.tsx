import { UserRound, Building, Phone as PhoneIcon } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import PageHeader from '@/components/PageHeader';

const members = [
  { name: 'Mr. R.K. Sharma', nameHi: 'श्री आर.के. शर्मा', role: 'President', roleHi: 'अध्यक्ष', phone: '9876543210' },
  { name: 'Mrs. S. Gupta', nameHi: 'श्रीमती एस. गुप्ता', role: 'Secretary', roleHi: 'सचिव', phone: '9876543211' },
  { name: 'Mr. A. Singh', nameHi: 'श्री ए. सिंह', role: 'Treasurer', roleHi: 'कोषाध्यक्ष', phone: '9876543212' },
  { name: 'Ms. L. Verma', nameHi: 'सुश्री एल. वर्मा', role: 'Executive Member', roleHi: 'कार्यकारी सदस्य', phone: '' },
  { name: 'Mr. P. Patel', nameHi: 'श्री पी. पटेल', role: 'Executive Member', roleHi: 'कार्यकारी सदस्य', phone: '' },
  { name: 'Mrs. K. Desai', nameHi: 'श्रीमती के. देसाई', role: 'Executive Member', roleHi: 'कार्यकारी सदस्य', phone: '' },
];

export default function Committee() {
  const { language, t } = useLanguage();

  return (
    <div className="container mx-auto px-4 lg:px-8">
      <PageHeader title={t.committee.title} description={t.committee.desc} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
        {members.map((m, i) => (
          <div
            key={i}
            className="bg-card rounded-2xl p-6 shadow-soft border border-border animate-fade-in"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center">
                <UserRound className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-foreground">
                  {language === 'hi' ? m.nameHi : m.name}
                </h3>
                <div className="flex items-center gap-1 text-primary text-sm">
                  <Building className="w-4 h-4" />
                  {language === 'hi' ? m.roleHi : m.role}
                </div>
              </div>
            </div>
            {m.phone && (
              <div className="flex items-center gap-2 text-muted-foreground text-sm border-t border-border pt-4">
                <PhoneIcon className="w-4 h-4" />
                {m.phone}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
