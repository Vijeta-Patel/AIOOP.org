import { useState } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import PageHeader from '@/components/PageHeader';

import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import gallery6 from '@/assets/gallery-6.jpg';

const photos = [
  { src: gallery1, caption: 'Community Gathering', captionHi: 'सामुदायिक सभा' },
  { src: gallery2, caption: 'Health Check-up Camp', captionHi: 'स्वास्थ्य जांच शिविर' },
  { src: gallery3, caption: 'Cultural Program', captionHi: 'सांस्कृतिक कार्यक्रम' },
  { src: gallery4, caption: 'Recreational Trip', captionHi: 'मनोरंजक यात्रा' },
  { src: gallery5, caption: 'Yoga & Wellness', captionHi: 'योग और कल्याण' },
  { src: gallery6, caption: 'Award Ceremony', captionHi: 'पुरस्कार समारोह' },
];

export default function Gallery() {
  const { language, t } = useLanguage();
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 lg:px-8">
      <PageHeader title={t.gallery.title} description={t.gallery.desc} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
        {photos.map((photo, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className="group relative overflow-hidden rounded-2xl shadow-soft aspect-[4/3] animate-fade-in"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <img
              src={photo.src}
              alt={language === 'hi' ? photo.captionHi : photo.caption}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <span className="text-card font-medium text-body-md">
                {language === 'hi' ? photo.captionHi : photo.caption}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/80 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-6 right-6 text-card hover:opacity-80"
            onClick={() => setSelected(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={photos[selected].src}
            alt={language === 'hi' ? photos[selected].captionHi : photos[selected].caption}
            className="max-w-full max-h-[85vh] rounded-xl object-contain"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
