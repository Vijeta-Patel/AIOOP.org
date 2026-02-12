import { CalendarDays, MapPin, Briefcase, Users, Scale, Heart } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import PageHeader from '@/components/PageHeader';

export default function Activities() {
  const { t } = useLanguage();

  const activities = [
    { icon: Briefcase, title: t.activities.service1, desc: t.activities.service1Desc },
    { icon: Users, title: t.activities.service2, desc: t.activities.service2Desc },
    { icon: Heart, title: t.activities.service3, desc: t.activities.service3Desc },
    { icon: CalendarDays, title: t.activities.service4, desc: t.activities.service4Desc },
    { icon: Scale, title: t.activities.service5, desc: t.activities.service5Desc },
    { icon: Heart, title: t.activities.service6, desc: t.activities.service6Desc },
    { icon: Users, title: t.activities.service7, desc: t.activities.service7Desc },
  ];

  return (
    <div className="container mx-auto px-4 lg:px-8">
      <PageHeader title={t.activities.title} description={t.activities.desc} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
        {activities.map((item, i) => (
          <div
            key={i}
            className="bg-card rounded-2xl p-8 shadow-soft border-t-4 border-primary/20 hover:border-primary transition-colors animate-fade-in"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <h3 className="font-display font-bold text-xl text-primary mb-3">{item.title}</h3>
            <p className="text-muted-foreground text-body-md mb-6">{item.desc}</p>
            <div className="border-t border-border pt-4 flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-primary" />
                {t.activities.regularSchedule}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                {t.activities.communityHall}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
