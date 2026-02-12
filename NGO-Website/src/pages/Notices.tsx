import { Bell } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import PageHeader from '@/components/PageHeader';

const noticesData = [
  { day: '20', month: 'FEB', year: '2024', type: 'Notice', title: 'Free Eye Checkup Camp', titleHi: 'निःशुल्क नेत्र जांच शिविर', desc: 'Organized in association with City Hospital on Sunday.', descHi: 'रविवार को सिटी हॉस्पिटल के सहयोग से आयोजित।' },
  { day: '28', month: 'FEB', year: '2024', type: 'Notice', title: 'Pension Hike Update', titleHi: 'पेंशन वृद्धि अपडेट', desc: 'Government announces 4% DA hike effective from January.', descHi: 'सरकार ने जनवरी से 4% DA वृद्धि की घोषणा की।' },
  { day: '05', month: 'MAR', year: '2024', type: 'Meeting', title: 'Annual General Meeting', titleHi: 'वार्षिक आम बैठक', desc: 'AGM scheduled at Community Hall, 11 AM. All members requested to attend.', descHi: 'AGM सामुदायिक हॉल में सुबह 11 बजे निर्धारित।' },
  { day: '12', month: 'MAR', year: '2024', type: 'Event', title: 'Holi Celebration', titleHi: 'होली समारोह', desc: 'Grand Holi celebration with music, food, and fun activities for all members.', descHi: 'सभी सदस्यों के लिए संगीत, भोजन और मनोरंजक गतिविधियों के साथ भव्य होली समारोह।' },
  { day: '20', month: 'MAR', year: '2024', type: 'Notice', title: 'Health Insurance Renewal', titleHi: 'स्वास्थ्य बीमा नवीनीकरण', desc: 'Last date for health insurance renewal is March 31. Submit forms at the office.', descHi: 'स्वास्थ्य बीमा नवीनीकरण की अंतिम तिथि 31 मार्च है।' },
];

export default function Notices() {
  const { language, t } = useLanguage();

  return (
    <div className="container mx-auto px-4 lg:px-8">
      <PageHeader title={t.notices.title} description={t.notices.desc} />
      <div className="flex flex-col gap-6 pb-20 max-w-4xl">
        {noticesData.map((notice, i) => (
          <div
            key={i}
            className="bg-card rounded-2xl p-6 shadow-soft flex gap-6 border-l-4 border-primary animate-fade-in"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="bg-accent rounded-xl p-4 text-center min-w-[80px] shrink-0">
              <span className="font-display font-bold text-2xl text-primary block">{notice.day}</span>
              <span className="text-xs font-semibold text-primary uppercase">{notice.month}</span>
              <span className="text-xs text-muted-foreground block">{notice.year}</span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Bell className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{notice.type}</span>
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-2">
                {language === 'hi' ? notice.titleHi : notice.title}
              </h3>
              <p className="text-muted-foreground text-body-md">
                {language === 'hi' ? notice.descHi : notice.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
