import { Bell } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import PageHeader from '@/components/PageHeader';

type Notice = {
  day: string;
  month: string;
  year: string;
  type: string;
  title: string;
  titleHi: string;
  intro: string;
  introHi: string;
  dateLabel: string;
  dateLabelHi: string;
  dateValue: string;
  dateValueHi: string;
  timeLabel: string;
  timeLabelHi: string;
  timeValue: string;
  timeValueHi: string;
  venueLabel: string;
  venueLabelHi: string;
  venueValue: string;
  venueValueHi: string;
  request: string;
  requestHi: string;
  signatory: string;
  signatoryHi: string;
};

const noticesData: Notice[] = [
  {
    day: '11',
    month: 'APR',
    year: '2026',
    type: 'Scholarship Program',
    title: 'Scholarship Distribution Program for Needy and Meritorious Students',
    titleHi: 'गरीब एवं मेधावी विद्यार्थियों के लिए छात्रवृत्ति वितरण कार्यक्रम',
    intro:
      'Please be informed that the previously postponed scholarship distribution program for needy and meritorious students, organized by All India Organization of Pensioners, Kanpur, has now been scheduled.',
    introHi:
      'कृपया अवगत कराना है कि आल इन्डिया आर्गनाइजेशन आफ पेन्शनर्स कानपुर की तरफ से गरीब एवं मेधावी विद्यार्थियों को पूर्व में स्थगित छात्रवृत्ति वितरण कार्यक्रम अब आयोजित किया गया है।',
    dateLabel: 'Date',
    dateLabelHi: 'दिनांक',
    dateValue: 'Saturday, April 11, 2026',
    dateValueHi: '11/04/2026, शनिवार',
    timeLabel: 'Time',
    timeLabelHi: 'समय',
    timeValue: '11:30 AM',
    timeValueHi: 'पूर्वाह्न 11:30 बजे',
    venueLabel: 'Venue',
    venueLabelHi: 'स्थान',
    venueValue:
      'Omkareshwar Saraswati Vidya Niketan Inter College, near Punjab National Bank, Jawahar Nagar, Kanpur',
    venueValueHi:
      'ओंकारेश्वर सरस्वती विद्या निकेतन इंटर कॉलेज, पंजाब नेशनल बैंक के निकट, जवाहर नगर, कानपुर',
    request:
      'All office bearers and executive committee members are requested to be present at the program on time. Please do not wait for a separate personal intimation.',
    requestHi:
      'आप सभी से अनुरोध है कि सभी पदाधिकारी एवं कार्यकारिणी सदस्य समय से कार्यक्रम में अवश्य उपस्थित रहने का कष्ट करें। कृपया निवेदन है कि व्यक्तिगत रूप से अलग से सूचना की प्रतीक्षा न करें।',
    signatory: 'O. P. Srivastava, General Secretary',
    signatoryHi: 'ओ. पी. श्रीवास्तव, महासचिव',
  },
  {
    day: '29',
    month: 'MAR',
    year: '2026',
    type: 'Meeting',
    title: 'March 2026 Executive Committee Meeting',
    titleHi: 'मार्च 2026 कार्य समिति की बैठक',
    intro:
      'Please be informed that the March 2026 meeting of the Executive Committee of All India Organization of Pensioners, Kanpur, has been convened.',
    introHi:
      'कृपया अवगत कराना है कि आल ईन्डिया आर्गनाइजेशन आफ पेन्शनर्स कानपुर की कार्य समिति की माह मार्च 2026 की बैठक आहूत की गई है।',
    dateLabel: 'Date',
    dateLabelHi: 'दिनांक',
    dateValue: 'Sunday, March 29, 2026',
    dateValueHi: '29/03/2026, रविवार',
    timeLabel: 'Time',
    timeLabelHi: 'समय',
    timeValue: '10:00 AM',
    timeValueHi: 'पूर्वाह्न 10:00 बजे',
    venueLabel: 'Venue',
    venueLabelHi: 'स्थान',
    venueValue: 'Office at Jaspat Rai Saraswati Vidya Mandir, 120/469, Lajpat Nagar, Kanpur',
    venueValueHi: 'जसपत राय सरस्वती विद्या मंदिर, 120/469, लाजपत नगर, कानपुर स्थित कार्यालय',
    request: 'All members are requested to participate in the meeting on time.',
    requestHi: 'अतः आप सभी से अनुरोध है कि कृपया बैठक में समय से प्रतिभाग अवश्य करने का कष्ट करें।',
    signatory: 'O. P. Srivastava, General Secretary',
    signatoryHi: 'ओ. पी. श्रीवास्तव, महासचिव',
  },
];

export default function Notices() {
  const { language, t } = useLanguage();

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
      <PageHeader title={t.notices.title} description={t.notices.desc} />
      <div className="flex flex-col gap-5 md:gap-8 pb-16 md:pb-20 max-w-4xl">
        {noticesData.length > 0 ? (
          noticesData.map((notice, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-4 sm:p-5 md:p-8 shadow-soft flex flex-col sm:flex-row gap-4 md:gap-6 border-l-4 border-primary animate-fade-in"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="bg-accent rounded-xl p-4 md:p-5 text-center w-full sm:w-auto sm:min-w-[96px] shrink-0 self-start">
                <span className="font-display font-bold text-2xl md:text-3xl text-primary block leading-none">{notice.day}</span>
                <span className="text-xs font-semibold text-primary uppercase">{notice.month}</span>
                <span className="text-xs text-muted-foreground block">{notice.year}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <Bell className="w-4 h-4 text-muted-foreground shrink-0" />
                  <span className="text-xs md:text-sm text-muted-foreground">{notice.type}</span>
                </div>
                <h3 className="font-display font-bold text-base sm:text-lg md:text-xl leading-snug text-foreground mb-3">
                  {language === 'hi' ? notice.titleHi : notice.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-body-md leading-relaxed mb-4">
                  {language === 'hi' ? notice.introHi : notice.intro}
                </p>
                <div className="grid gap-2.5 sm:gap-3 text-sm md:text-body-md text-foreground">
                  <p className="rounded-lg bg-accent/40 px-3 py-2 leading-relaxed break-words">
                    <span className="font-semibold text-primary block sm:inline">
                      {language === 'hi' ? `${notice.dateLabelHi}: ` : `${notice.dateLabel}: `}
                    </span>
                    <span>{language === 'hi' ? notice.dateValueHi : notice.dateValue}</span>
                  </p>
                  <p className="rounded-lg bg-accent/40 px-3 py-2 leading-relaxed break-words">
                    <span className="font-semibold text-primary block sm:inline">
                      {language === 'hi' ? `${notice.timeLabelHi}: ` : `${notice.timeLabel}: `}
                    </span>
                    <span>{language === 'hi' ? notice.timeValueHi : notice.timeValue}</span>
                  </p>
                  <p className="rounded-lg bg-accent/40 px-3 py-2 leading-relaxed break-words">
                    <span className="font-semibold text-primary block sm:inline">
                      {language === 'hi' ? `${notice.venueLabelHi}: ` : `${notice.venueLabel}: `}
                    </span>
                    <span>{language === 'hi' ? notice.venueValueHi : notice.venueValue}</span>
                  </p>
                </div>
                <p className="mt-4 text-muted-foreground text-sm md:text-body-md leading-relaxed">
                  <span className="font-semibold text-foreground block sm:inline">
                    {language === 'hi' ? 'अनुरोध: ' : 'Request: '}
                  </span>
                  {language === 'hi' ? notice.requestHi : notice.request}
                </p>
                <p className="mt-4 font-medium text-sm md:text-body-md text-foreground break-words">
                  {language === 'hi' ? notice.signatoryHi : notice.signatory}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-card rounded-2xl p-6 sm:p-8 md:p-10 shadow-soft border border-border/60 text-center animate-fade-in">
            <Bell className="w-8 h-8 text-muted-foreground mx-auto mb-4" />
            <p className="font-display font-bold text-xl text-foreground mb-2">
              {language === 'hi' ? 'फिलहाल कोई नई सूचना उपलब्ध नहीं है।' : 'No current notices available.'}
            </p>
            <p className="text-muted-foreground text-sm md:text-body-md">
              {language === 'hi'
                ? 'नई सूचना जारी होने पर इसे यहां अपडेट किया जाएगा।'
                : 'This page will be updated when a new notice is published.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
