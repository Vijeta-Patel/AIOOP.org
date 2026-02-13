import { Link } from 'react-router-dom';
import { ArrowRight, FileText, HeartPulse, CalendarDays, Download } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Index() {
  const { t } = useLanguage();

    return (
      <div>
        {/* Hero */}
        <section className="bg-gradient-to-br from-accent via-background to-accent/50 py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl">
              <div className="flex flex-col lg:flex-row items-center gap-6">
                <div>
                  <h2 className="font-serif font-extrabold text-3xl md:text-5xl lg:text-6xl leading-relaxed text-foreground mt-1">
                    {t.home.heroHeadingLine1}
                    <span className="block mt-3 md:mt-2 lg:mt-4">{t.home.heroHeadingLine2}</span>
                  </h2>
                  <p className="mt-2 text-xl italic text-primary">{t.home.heroTitle1} <span className="block">{t.home.heroTitle2}</span></p>
                  <p className="mt-4 text-body-lg text-muted-foreground max-w-xl leading-relaxed">{t.home.heroDesc}</p>

                  <div className="mt-6 flex flex-wrap gap-4 items-center">
                <Link
                  to="/activities"
                  className="inline-flex items-center justify-center w-56 whitespace-nowrap gap-2 py-3 rounded-full bg-primary text-primary-foreground font-medium text-body-md hover:opacity-90 transition-opacity shadow-md"
                >
                  {t.home.viewActivities}
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center w-56 whitespace-nowrap gap-2 py-3 rounded-full border-2 border-primary/60 text-foreground font-medium text-body-md hover:bg-primary/5 transition-colors shadow-sm"
                >
                  {t.home.contactUs}
                </Link>
                  </div>

                  <div className="mt-4">
                    <a
                      href="/Medicalform.pdf"
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-[448px] whitespace-nowrap gap-2 py-3 rounded-full border-2 border-primary/60 text-foreground font-medium text-body-md hover:bg-primary/5 transition-colors shadow-sm"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      {t.home.medicalReimbursementPdf}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission + Quick Actions */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Mission */}
              <div>
                <h2 className="font-display font-bold text-display-md text-foreground italic mb-6">{t.home.missionTitle}</h2>
                <p className="text-body-lg text-muted-foreground leading-relaxed">{t.home.missionDesc}</p>
                <div className="mt-10 flex gap-6">
                  <div className="bg-card rounded-xl p-6 shadow-soft text-center min-w-[140px]">
                    <span className="font-display font-bold text-3xl text-foreground">20+</span>
                    <p className="text-sm text-muted-foreground mt-1 uppercase tracking-wider">{t.home.yearsService}</p>
                  </div>
                  <div className="bg-card rounded-xl p-6 shadow-soft text-center min-w-[140px]">
                    <span className="font-display font-bold text-3xl text-foreground">500+</span>
                    <p className="text-sm text-muted-foreground mt-1 uppercase tracking-wider">{t.home.members}</p>
                  </div>
                </div>
                <div className="mt-8">
                  <a
                    href="/MEMBER%20_LIST.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
                  >
                    <FileText className="w-4 h-4" />
                    {t.home.memberListPdf}
                  </a>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-card rounded-2xl p-8 shadow-card">
                <h3 className="font-display font-bold text-2xl text-foreground italic mb-6">{t.home.quickActions}</h3>
                <div className="flex flex-col gap-4">
                  {[
                    { icon: FileText, title: t.home.latestNotices, desc: t.home.checkUpdates, to: '/notices', color: 'bg-accent' },
                    { icon: HeartPulse, title: t.home.medicalSupport, desc: t.home.viewHealthcare, to: '/facilities', color: 'bg-success/10' },
                    { icon: CalendarDays, title: t.home.upcomingEvents, desc: t.home.joinGathering, to: '/activities', color: 'bg-warning/10' },
                  ].map(item => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted transition-colors group"
                    >
                      <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center shrink-0`}>
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}
