import { Link } from 'react-router-dom';
import { ArrowRight, FileText, HeartPulse, CalendarDays, Download, BookOpenText, BellRing } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Index() {
  const { t, language } = useLanguage();
  const noticeCueUntil = new Date('2026-04-11T11:30:00+05:30');
  const showNoticeCue = new Date() < noticeCueUntil;
  const magazineCopy =
    language === 'hi'
      ? {
          badge: 'विशेष प्रकाशन',
          title: 'AIOOP E-Magazine 2025-26',
          desc: 'हमारी पेंशनर समुदाय की झलकियां, गतिविधियां और महत्वपूर्ण अपडेट इस डिजिटल मैगजीन में पढ़ें।',
          open: 'मैगजीन खोलें',
          download: 'PDF डाउनलोड करें',
          issue: '2025-26 संस्करण',
        }
      : {
          badge: 'Featured Publication',
          title: 'AIOOP E-Magazine 2025-26',
          desc: 'Explore highlights, activities, and important updates from our pensioner community in this digital magazine.',
          open: 'Open Magazine',
          download: 'Download PDF',
          issue: '2025-26 Edition',
        };

    return (
      <div>
        {/* Hero */}
        <section className="min-h-screen flex items-center bg-gradient-to-br from-accent via-background to-accent/50 pt-32 pb-16 sm:pt-36 sm:pb-20 md:pt-40 md:pb-24 lg:pt-44 lg:pb-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
              <div className="grid items-center gap-8 xl:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.75fr)] xl:gap-14">
              <div className="w-full max-w-2xl md:max-w-3xl">
                  {showNoticeCue && (
                    <Link
                      to="/notices"
                      className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-2 text-[11px] font-semibold tracking-[0.02em] text-primary shadow-sm ring-1 ring-primary/10 transition-colors hover:border-primary/45 hover:bg-primary/15 md:mb-6 md:px-4 md:text-xs"
                    >
                      <BellRing className="h-3.5 w-3.5 shrink-0" />
                      <span>
                        {language === 'hi'
                          ? 'छात्रवृत्ति वितरण कार्यक्रम की नई सूचना उपलब्ध है'
                          : 'New scholarship distribution notice is available'}
                      </span>
                    </Link>
                  )}
                  <h2 className="mt-1 max-w-full break-words font-serif text-[1.9rem] font-extrabold leading-[0.95] text-foreground sm:text-[2.2rem] md:text-5xl md:leading-relaxed lg:text-6xl">
                    {t.home.heroHeadingLine1}
                    <span className="block mt-3 md:mt-2 lg:mt-4">{t.home.heroHeadingLine2}</span>
                  </h2>
                  <p className="mt-3 text-base italic text-primary md:mt-6 md:text-xl">{t.home.heroTitle1} <span className="block">{t.home.heroTitle2}</span></p>
                  <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:mt-8 md:text-body-lg">{t.home.heroDesc}</p>

                  <div className="mt-6 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:items-center sm:gap-4">
                <Link
                  to="/activities"
                  className="inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground shadow-md transition-opacity hover:opacity-90 sm:w-auto sm:px-8 sm:text-body-md"
                >
                  <span className="break-words">{t.home.viewActivities}</span>
                  <ArrowRight className="h-5 w-5 shrink-0" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-full border-2 border-primary/60 px-5 py-3 text-center text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-primary/5 sm:w-auto sm:px-8 sm:text-body-md"
                >
                  <span className="break-words">{t.home.contactUs}</span>
                </Link>
                  </div>

                  <div className="mt-6 md:mt-8 w-full sm:w-auto">
                    <a
                      href="/MedicalForm.pdf"
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-full border-2 border-primary/60 px-5 py-3 text-center text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-primary/5 sm:w-auto sm:max-w-full sm:px-8 sm:text-body-md"
                    >
                      <Download className="mr-1 h-4 w-4 shrink-0" />
                      <span className="break-words">{t.home.medicalReimbursementPdf}</span>
                    </a>
                  </div>
              </div>

              <div className="mx-auto w-full max-w-[17rem] sm:max-w-[20rem] lg:max-w-[21.5rem]">
                <div className="rounded-[1.5rem] border border-primary/20 bg-card/90 p-2.5 shadow-[0_24px_60px_-24px_rgba(120,0,20,0.45)] backdrop-blur sm:rounded-[1.75rem] sm:p-3">
                  <a
                    href="/E_Magazine_25_26.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className="relative mx-auto aspect-[3/4] max-w-[14rem] rounded-[1.25rem] border-[3px] border-primary bg-gradient-to-br from-card via-card to-accent/40 p-3 transition-transform duration-300 group-hover:-translate-y-1 sm:max-w-[16.5rem] sm:rounded-[1.5rem] sm:border-4 sm:p-4">
                      <div className="flex items-center justify-between text-primary">
                        <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] sm:px-3 sm:text-xs sm:tracking-[0.18em]">
                          AIOOP
                        </span>
                        <BookOpenText className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div className="mt-6 sm:mt-8">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary/80 sm:text-xs sm:tracking-[0.24em]">
                          {magazineCopy.issue}
                        </p>
                        <h3 className="mt-2 font-serif text-[1.35rem] font-extrabold leading-tight text-foreground sm:mt-3 sm:text-[1.65rem]">
                          E-Magazine
                        </h3>
                        <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground sm:mt-3 sm:text-xs">
                          All India Organisation of Pensioners
                        </p>
                      </div>
                    </div>
                  </a>

                  <div className="mt-3 sm:mt-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/80 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-primary sm:text-[10px] sm:tracking-[0.16em]">
                      <BookOpenText className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      {magazineCopy.badge}
                    </div>
                    <h3 className="mt-2 font-display text-lg font-bold leading-tight text-foreground sm:mt-3 sm:text-xl md:text-2xl">
                      {magazineCopy.title}
                    </h3>
                    <div className="mt-4 flex flex-col gap-2.5 sm:mt-5 md:flex-row sm:gap-3">
                      <a
                        href="/E_Magazine_25_26.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-[11px] font-semibold text-primary-foreground shadow-md transition-opacity hover:opacity-90 sm:px-5 sm:text-xs"
                      >
                        <BookOpenText className="h-3.5 w-3.5" />
                        {magazineCopy.open}
                      </a>
                      <a
                        href="/E_Magazine_25_26.pdf"
                        download
                        className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary/30 bg-background px-4 py-2.5 text-[11px] font-semibold text-foreground transition-colors hover:bg-primary/5 sm:px-5 sm:text-xs"
                      >
                        <Download className="h-3.5 w-3.5" />
                        {magazineCopy.download}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission + Quick Actions */}
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
            <div className="grid gap-10 lg:grid-cols-2 md:gap-16 lg:gap-24">
              {/* Mission */}
              <div>
                <h2 className="mb-6 font-display text-3xl font-bold italic text-foreground md:mb-8 md:text-display-md">{t.home.missionTitle}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-body-lg">{t.home.missionDesc}</p>
                <div className="mt-8 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:gap-6 md:mt-16">
                  <div className="bg-card rounded-xl p-6 md:p-8 shadow-soft text-center min-w-[140px]">
                    <span className="font-display font-bold text-3xl md:text-4xl text-foreground">20+</span>
                    <p className="text-xs md:text-sm text-muted-foreground mt-2 uppercase tracking-wider">{t.home.yearsService}</p>
                  </div>
                  <div className="bg-card rounded-xl p-6 md:p-8 shadow-soft text-center min-w-[140px]">
                    <span className="font-display font-bold text-3xl md:text-4xl text-foreground">500+</span>
                    <p className="text-xs md:text-sm text-muted-foreground mt-2 uppercase tracking-wider">{t.home.members}</p>
                  </div>
                </div>
                <div className="mt-8 md:mt-14">
                  <a
                    href="/AIOOP_LIST.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto md:px-8"
                  >
                    <FileText className="h-4 w-4 shrink-0" />
                    <span className="break-words">{t.home.memberListPdf}</span>
                  </a>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="rounded-2xl bg-card p-5 shadow-card md:p-8 lg:p-10">
                <h3 className="mb-6 font-display text-2xl font-bold italic text-foreground md:mb-8 md:text-3xl">{t.home.quickActions}</h3>
                <div className="flex flex-col gap-4 md:gap-6">
                  {[
                    { icon: FileText, title: t.home.latestNotices, desc: t.home.checkUpdates, to: '/notices', color: 'bg-accent' },
                    { icon: HeartPulse, title: t.home.medicalSupport, desc: t.home.viewHealthcare, to: '/facilities', color: 'bg-success/10' },
                    { icon: CalendarDays, title: t.home.upcomingEvents, desc: t.home.joinGathering, to: '/activities', color: 'bg-warning/10' },
                  ].map(item => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="flex items-center gap-4 p-4 md:p-5 rounded-xl hover:bg-muted transition-colors group"
                    >
                      <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full ${item.color} flex items-center justify-center shrink-0`}>
                        <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground text-sm md:text-base">{item.title}</h4>
                        <p className="text-xs md:text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
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
