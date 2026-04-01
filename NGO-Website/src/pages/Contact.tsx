import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Contact() {
  const { t, language } = useLanguage();

  const contactMethods = [
    {
      icon: MapPin,
      title: language === 'hi' ? 'कार्यालय पता' : 'Office Address',
      label: t.contact.address,
    },
    {
      icon: Phone,
      title: language === 'hi' ? 'फोन सहायता' : 'Phone Support',
      label: t.contact.phone,
    },
    {
      icon: Mail,
      title: language === 'hi' ? 'ईमेल संपर्क' : 'Email Contact',
      label: t.contact.emailAddress,
    },
    {
      icon: Clock,
      title: t.contact.officeHours,
      label: t.contact.officeHoursValue,
    },
  ];

  const phoneHref = `tel:${t.contact.phone.replace(/[^\d+]/g, '')}`;

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
      <div className="mb-4 pt-28 pb-6 md:mb-5 md:pt-32 md:pb-10 lg:pt-36 lg:pb-12">
        <h1 className="mb-4 font-display text-3xl font-bold text-foreground md:mb-5 md:text-4xl lg:text-display-lg xl:text-display-xl">
          {t.contact.title}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:mt-5 md:text-lg lg:text-body-lg">
          {t.contact.desc}
        </p>
      </div>

      <section className="pb-16 md:pb-20">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:gap-8">
          <div className="relative overflow-hidden rounded-[1.6rem] border border-primary/15 bg-gradient-to-br from-primary/[0.08] via-card to-accent/60 p-5 shadow-card md:rounded-[2rem] md:p-8 lg:p-10">
            <div className="absolute -right-10 top-0 h-36 w-36 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute left-0 top-1/2 h-28 w-28 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary md:px-4 md:py-2 md:text-xs md:tracking-[0.16em]">
                <Mail className="h-3.5 w-3.5 md:h-4 md:w-4" />
                {language === 'hi' ? 'हमसे जुड़ें' : 'Reach Out To Us'}
              </div>

              <h2 className="mt-4 max-w-xl font-display text-xl font-bold leading-tight text-foreground md:mt-5 md:text-3xl lg:text-4xl">
                {language === 'hi'
                  ? 'सहायता, जानकारी और मार्गदर्शन के लिए हम आपके साथ हैं।'
                  : 'We are here to help with support, guidance, and every important query.'}
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:mt-4 md:text-body-lg">
                {language === 'hi'
                  ? 'कार्यालय समय, पता, फोन और ईमेल की सभी जानकारी एक ही स्थान पर उपलब्ध है ताकि आप आसानी से हमसे संपर्क कर सकें।'
                  : 'Find our office hours, address, phone, and email in one place so members and visitors can connect with the organization without any confusion.'}
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 md:mt-6 md:gap-4">
                <div className="rounded-2xl border border-primary/15 bg-background/75 p-4 md:p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-primary md:text-xs md:tracking-[0.16em]">
                    {language === 'hi' ? 'त्वरित सहायता' : 'Quick Help'}
                  </p>
                  <p className="mt-2 text-base font-semibold text-foreground md:mt-3 md:text-lg">
                    {language === 'hi' ? 'फोन या ईमेल से तुरंत संपर्क करें' : 'Connect instantly by phone or email'}
                  </p>
                </div>
                <div className="rounded-2xl border border-primary/15 bg-background/75 p-4 md:p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-primary md:text-xs md:tracking-[0.16em]">
                    {language === 'hi' ? 'भ्रमण समय' : 'Visit Timing'}
                  </p>
                  <p className="mt-2 text-base font-semibold text-foreground md:mt-3 md:text-lg">{t.contact.officeHoursValue}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-3 md:gap-5">
            {contactMethods.map((item, i) => (
              <div
                key={i}
                className="rounded-[1.35rem] border border-border bg-card p-4 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card md:rounded-[1.6rem] md:p-7"
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary md:h-14 md:w-14 md:rounded-2xl">
                    <item.icon className="h-5 w-5 md:h-7 md:w-7" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-primary md:text-xs md:tracking-[0.16em]">
                      {item.title}
                    </p>
                    {item.icon === Phone ? (
                      <a
                        href={phoneHref}
                        className="mt-1.5 inline-block text-sm font-medium leading-relaxed text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 md:mt-2 md:text-body-md"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <p className="mt-1.5 text-sm font-medium leading-relaxed text-foreground md:mt-2 md:text-body-md">
                        {item.label}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
