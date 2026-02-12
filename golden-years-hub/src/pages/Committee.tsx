import { UserRound, Building, Phone as PhoneIcon } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import PageHeader from '@/components/PageHeader';

const members = [
  { name: 'Vinod Kumar Gupta', nameHi: 'विनोद कुमार गुप्ता', role: 'President', roleHi: 'अध्यक्ष', phone: '9415486514' },
  { name: 'P.P. Dixit', nameHi: 'पी०पी० दीक्षित', role: 'Vice President', roleHi: 'उपाध्यक्ष', phone: '9415486514' },
  { name: 'R.N. Srivastava', nameHi: 'आर०एन० श्रीवास्तव', role: 'Vice President', roleHi: 'उपाध्यक्ष', phone: '9369253458' },
  { name: 'Om Prakash Srivastava', nameHi: 'ओम प्रकाश श्रीवास्तव', role: 'General Secretary', roleHi: 'महासचिव', phone: '9415477344' },
  { name: 'Ram Khilawan Vishwakarma', nameHi: 'राम खिलावन विश्वकर्मा', role: 'Finance Secretary', roleHi: 'वित्त सचिव', phone: '7388620019' },
  { name: 'B.P. Singh', nameHi: 'बी०पी० सिंह', role: 'Administrative Secretary', roleHi: 'प्रशासनिक सचिव', phone: '6393805598' },
  { name: 'Satish Prakash', nameHi: 'सतीश प्रकाश', role: 'PRO', roleHi: 'पी०आर०ओ०', phone: '9653049184' },
  { name: 'Surendra Kumar Mishra', nameHi: 'सुरेन्द्र कुमार मिश्रा', role: 'Auditor', roleHi: 'ऑडिटर', phone: '9415438164' },
  { name: 'Kamal Kumar Verma', nameHi: 'कमल कुमार वर्मा', role: 'Accountant', roleHi: 'लेखाकार', phone: '9415040505' },
  { name: 'Masood Ahmad Alvi', nameHi: 'मसूद अहमद अल्वी', role: 'Executive Member', roleHi: 'सदस्य कार्यकारिणी', phone: '8318652010' },
  { name: 'Dr. Rakesh Kumar', nameHi: 'डा० राकेश कुमार', role: 'Executive Member', roleHi: 'सदस्य कार्यकारिणी', phone: '9415440871' },
  { name: 'Anirudh Singh', nameHi: 'अनिरूद्ध सिंह', role: 'Executive Member', roleHi: 'सदस्य कार्यकारिणी', phone: '9415796440' },
  { name: 'V.K. Singh', nameHi: 'वी०के० सिंह', role: 'Executive Member', roleHi: 'सदस्य कार्यकारिणी', phone: '9918555523' },
  { name: 'Vijay Anand Dariyabadi', nameHi: 'विजय आनन्द दरियाबादी', role: 'Executive Member', roleHi: 'सदस्य कार्यकारिणी', phone: '8081924191' },
  { name: 'Surendra Kumar Shukla', nameHi: 'सुरेन्द्र कुमार शुक्ला', role: 'Executive Member', roleHi: 'सदस्य कार्यकारिणी', phone: '9411663190' },
  { name: 'Shyam Kumar Sinha', nameHi: 'श्याम कुमार सिन्हा', role: 'Executive Member', roleHi: 'सदस्य कार्यकारिणी', phone: '8318262415' },
  { name: 'Vijay Kumar Tiwari', nameHi: 'विजय कुमार तिवारी', role: 'Executive Member', roleHi: 'सदस्य कार्यकारिणी', phone: '9450124662' },
  { name: 'Purushottam Narayan Mishra', nameHi: 'पुरूषोत्तम नारायण मिश्रा', role: 'Executive Member', roleHi: 'सदस्य कार्यकारिणी', phone: '9415478055' },
  { name: 'Swaroop Narayan Nigam', nameHi: 'स्वरूप नारायण निगम', role: 'Executive Member', roleHi: 'सदस्य कार्यकारिणी', phone: '9453287576' },
  { name: 'Baljeet Singh', nameHi: 'बलजीत सिंह', role: 'Executive Member', roleHi: 'सदस्य कार्यकारिणी', phone: '9621048266' },
  { name: 'Rajeev Pradhan', nameHi: 'राजीव प्रधान', role: 'Executive Member', roleHi: 'सदस्य कार्यकारिणी', phone: '9450138009' },
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
