import { Building2, BookOpen, Stethoscope, HeartHandshake, Monitor, Gamepad2 } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import PageHeader from '@/components/PageHeader';

export default function Facilities() {
  const { t } = useLanguage();

  const facilities = [
    { icon: Building2, title: t.facilities.communityHall, desc: t.facilities.communityHallDesc },
    { icon: BookOpen, title: t.facilities.library, desc: t.facilities.libraryDesc },
    { icon: Stethoscope, title: t.facilities.healthCenter, desc: t.facilities.healthCenterDesc },
    { icon: HeartHandshake, title: t.facilities.counseling, desc: t.facilities.counselingDesc },
    { icon: Monitor, title: t.facilities.computerLab, desc: t.facilities.computerLabDesc },
    { icon: Gamepad2, title: t.facilities.recreationArea, desc: t.facilities.recreationDesc },
  ];

  return (
    <div className="container mx-auto px-4 lg:px-8">
      <PageHeader title={t.facilities.title} description={t.facilities.desc} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
        {facilities.map((item, i) => (
          <div
            key={i}
            className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-shadow animate-fade-in"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-5">
              <item.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display font-bold text-xl text-foreground mb-3">{item.title}</h3>
            <p className="text-muted-foreground text-body-md">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
