import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Images, CalendarDays } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import PageHeader from '@/components/PageHeader';

// ── Ganga Mela 2026 ──────────────────────────────────────────────────────────
import gm1 from '@/assets/Ganga-Mela 2026/1.png';
import gm2 from '@/assets/Ganga-Mela 2026/2.png';
import gm3 from '@/assets/Ganga-Mela 2026/3.png';
import gm4 from '@/assets/Ganga-Mela 2026/4.png';
import gm5 from '@/assets/Ganga-Mela 2026/5.png';
import gm6 from '@/assets/Ganga-Mela 2026/6.png';

// ── Executive Committee Meeting ───────────────────────────────────────────────
import em1 from '@/assets/exec-meeting-29-03-26/1.png';
import em2 from '@/assets/exec-meeting-29-03-26/2.png';
import em3 from '@/assets/exec-meeting-29-03-26/3.png';
import em4 from '@/assets/exec-meeting-29-03-26/4.png';

const gangaMelaPhotos = [
  { src: gm1, captionEn: 'Shri Rakesh Sachan – Cabinet Minister, Dept. of MSME, Govt. of U.P.', captionHi: 'माननीय श्री राकेश सचान – कैबिनेट मिनिस्टर, सूक्ष्म लघु एवं मध्यम उद्यम विभाग, उ.प्र. सरकार' },
  { src: gm2, captionEn: 'Shri Surendra Maithani – MLA, Govind Nagar Constituency, Kanpur', captionHi: 'माननीय श्री सुरेन्द्र मैथानी – विधायक, गोविन्द नगर विधान सभा, कानपुर नगर' },
  { src: gm3, captionEn: 'Shri Amitabh Bajpai – MLA, Arya Nagar Constituency, Kanpur', captionHi: 'माननीय श्री अमिताभ बाजपेई – विधायक, आर्य नगर विधान सभा, कानपुर नगर' },
  { src: gm4, captionEn: 'Smt. Pramila Pandey – Mayor, Kanpur Nagar Municipal Corporation', captionHi: 'माननीय श्रीमती प्रमिला पाण्डेय – महापौर, नगर निगम, कानपुर नगर' },
  { src: gm5, captionEn: 'Param Pujya Sant Shri Bal Yogi Arun Puri Chaitanya Ji Maharaj', captionHi: 'परमपूज्य संतश्री बालयोगी अरुणपुरी चेतन्य जी महाराज' },
  { src: gm6, captionEn: 'Holi & Ganga Mela Camp – All India Organization of Pensioners, Kanpur', captionHi: 'होली एवं गंगा मेला कैंप – ऑल इंडिया ऑर्गनाइजेशन ऑफ पेंशनर्स, कानपुर' },
];

const execMeetingPhotos = [
  { src: em1, captionEn: 'Executive Committee Meeting – 29/03/2026', captionHi: 'कार्य समिति की बैठक – 29/03/2026' },
  { src: em2, captionEn: 'Members in discussion at the Executive Meeting', captionHi: 'कार्य समिति बैठक में चर्चा के दौरान सदस्य' },
  { src: em3, captionEn: 'Proceedings of the Executive Committee Meeting', captionHi: 'कार्य समिति बैठक की कार्यवाही' },
  { src: em4, captionEn: 'Executive Committee Meeting – AIOOP Kanpur, 29 March 2026', captionHi: 'ऑल इंडिया ऑर्गनाइजेशन ऑफ पेंशनर्स, कानपुर – कार्य समिति बैठक, 29 मार्च 2026' },
];

// ── Types ─────────────────────────────────────────────────────────────────────
interface Photo { src: string; captionEn: string; captionHi: string; }

interface GalleryDialogProps {
  isOpen: boolean;
  onClose: () => void;
  titleEn: string;
  titleHi: string;
  descEn: string;
  descHi: string;
  dateEn: string;
  dateHi: string;
  photos: Photo[];
  language: string;
}

// ── Lightbox + Dialog ─────────────────────────────────────────────────────────
function GalleryDialog({
  isOpen, onClose, titleEn, titleHi, descEn, descHi, dateEn, dateHi, photos, language,
}: GalleryDialogProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const caption = (p: Photo) => language === 'hi' ? p.captionHi : p.captionEn;
  const title   = language === 'hi' ? titleHi : titleEn;

  const prev = () => setLightboxIndex(i => i === null ? null : (i - 1 + photos.length) % photos.length);
  const next = () => setLightboxIndex(i => i === null ? null : (i + 1) % photos.length);

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') { lightboxIndex !== null ? setLightboxIndex(null) : onClose(); return; }
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-4"
      onKeyDown={handleKey}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/65 backdrop-blur-sm"
        onClick={lightboxIndex !== null ? () => setLightboxIndex(null) : onClose}
        aria-hidden="true"
      />

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <div
          className="absolute inset-0 z-20 flex flex-col bg-black/95"
          role="dialog"
          aria-modal="true"
          aria-label={`Photo ${lightboxIndex + 1} of ${photos.length}: ${caption(photos[lightboxIndex])}`}
        >
          {/* Close — always on top, clear of the row below */}
          <button
            onClick={() => setLightboxIndex(null)}
            aria-label="Close photo viewer"
            className="absolute top-3 right-3 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <X className="h-5 w-5" />
          </button>

          {/* ── flex row: Prev | Image | Next — arrows always align with the image ── */}
          <div className="flex flex-1 min-h-0 items-center pt-14 pb-0">
            {/* Prev */}
            <button
              onClick={prev}
              aria-label="Previous photo"
              className="flex-shrink-0 flex h-full w-12 sm:w-16 items-center justify-center text-white transition hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
            >
              <span className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/15 transition hover:bg-white/25">
                <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
              </span>
            </button>

            {/* Image */}
            <div className="flex flex-1 min-w-0 h-full items-center justify-center py-3">
              <img
                src={photos[lightboxIndex].src}
                alt={caption(photos[lightboxIndex])}
                className="max-h-full w-full object-contain rounded-xl shadow-2xl"
              />
            </div>

            {/* Next */}
            <button
              onClick={next}
              aria-label="Next photo"
              className="flex-shrink-0 flex h-full w-12 sm:w-16 items-center justify-center text-white transition hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
            >
              <span className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/15 transition hover:bg-white/25">
                <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </span>
            </button>
          </div>

          {/* Caption bar pinned at bottom */}
          <div className="w-full border-t border-white/10 bg-black/60 px-6 py-3 text-center">
            <p className="text-sm font-medium leading-snug text-white/85">
              {caption(photos[lightboxIndex])}
            </p>
            <p className="mt-0.5 text-xs text-white/40">
              {lightboxIndex + 1} / {photos.length}
            </p>
          </div>
        </div>
      )}

      {/* ── Dialog Panel ── */}
      <div className="relative z-10 flex w-full flex-col overflow-hidden rounded-t-3xl bg-card shadow-2xl sm:max-w-3xl sm:rounded-2xl" style={{ maxHeight: 'min(92vh, 700px)' }}>
        {/* Header */}
        <div className="border-b border-border/60 px-5 py-4 sm:px-6">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-widest text-primary/70">
                {language === 'hi' ? dateHi : dateEn}
              </p>
              <h2 className="font-display text-lg font-bold leading-snug text-foreground sm:text-xl">
                {language === 'hi' ? titleHi : titleEn}
              </h2>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {language === 'hi' ? descHi : descEn}
              </p>
            </div>
            <button onClick={onClose} aria-label="Close"
              className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition hover:bg-muted">
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Photo grid */}
        <div className="overflow-y-auto p-4 sm:p-5" role="list" aria-label="Gallery photos">
          <div className="grid grid-cols-2 gap-2.5 xs:grid-cols-2 sm:grid-cols-3">
            {photos.map((photo, i) => (
              <button
                key={i}
                onClick={() => setLightboxIndex(i)}
                aria-label={`View photo: ${caption(photo)}`}
                role="listitem"
                className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-border/40 bg-muted/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <img
                  src={photo.src}
                  alt={caption(photo)}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Always-visible subtle label on mobile, hover on desktop */}
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-black/5 to-transparent sm:opacity-0 sm:transition-opacity sm:duration-200 sm:group-hover:opacity-100">
                  <p className="w-full px-2 pb-2 text-center text-[10px] font-medium leading-tight text-white line-clamp-2 sm:text-[11px]">
                    {caption(photo)}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Gallery Tile ──────────────────────────────────────────────────────────────
interface TileProps {
  icon: React.ElementType;
  badgeEn: string;
  badgeHi: string;
  titleEn: string;
  titleHi: string;
  dateEn: string;
  dateHi: string;
  descEn: string;
  descHi: string;
  count: number;
  coverImages: string[];
  onClick: () => void;
  language: string;
}

function GalleryTile({ icon: Icon, badgeEn, badgeHi, titleEn, titleHi, dateEn, dateHi, descEn, descHi, count, coverImages, onClick, language }: TileProps) {
  const badge = language === 'hi' ? badgeHi : badgeEn;
  const title = language === 'hi' ? titleHi : titleEn;
  const date  = language === 'hi' ? dateHi  : dateEn;
  const desc  = language === 'hi' ? descHi  : descEn;

  return (
    <button
      onClick={onClick}
      className="group relative w-full overflow-hidden rounded-2xl border border-primary/20 bg-card/90 p-4 text-left shadow-[0_12px_40px_-16px_rgba(120,0,20,0.28)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_50px_-16px_rgba(120,0,20,0.42)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:p-5"
    >
      {/* 2×2 photo collage */}
      <div className="relative mb-4 w-full overflow-hidden rounded-xl border-2 border-primary/25 aspect-video">
        <div className="grid h-full grid-cols-2 grid-rows-2 gap-0.5">
          {coverImages.slice(0, 4).map((src, i) => (
            <div key={i} className="relative overflow-hidden">
              <img src={src} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
          ))}
        </div>
        {/* shimmer overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-50 pointer-events-none" />
        {/* photo count badge */}
        <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
          <Images className="h-3 w-3" />
          {count} {language === 'hi' ? 'फ़ोटो' : 'Photos'}
        </div>
      </div>

      {/* Text content */}
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
          <Icon className="h-4.5 w-4.5 text-primary h-[18px] w-[18px]" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-background/80 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary">
            {badge}
          </div>
          <p className="mt-1 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">{date}</p>
          <h3 className="mt-1 font-display text-sm font-bold leading-snug text-foreground sm:text-base">{title}</h3>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground line-clamp-2">{desc}</p>
        </div>
      </div>

      {/* Hover hint */}
      <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <Images className="h-3.5 w-3.5" />
        {language === 'hi' ? 'गैलरी देखने के लिए क्लिक करें' : 'Click to view gallery'}
      </div>
    </button>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Gallery() {
  const { t, language } = useLanguage();
  const [openGallery, setOpenGallery] = useState<'ganga-mela' | 'exec-meeting' | null>(null);

  const gangaCovers = gangaMelaPhotos.slice(0, 4).map(p => p.src);
  const execCovers  = execMeetingPhotos.slice(0, 4).map(p => p.src);

  return (
    <>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 py-20">
        <PageHeader title={t.gallery.title} description={t.gallery.desc} />

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:gap-8 max-w-3xl">
          {/* Tile 1 — Holi Ganga Mela 2026 */}
          <GalleryTile
            icon={CalendarDays}
            badgeEn="Event"
            badgeHi="कार्यक्रम"
            titleEn="Holi Ganga Mela 2026"
            titleHi="होली गंगा मेला 2026"
            dateEn="10 March 2026"
            dateHi="10 मार्च 2026"
            descEn="Ganga Mela festival at Sarsaiya Ghat, Kanpur. AIOOP hosted a Holi Milan Camp and welcomed public representatives and respected citizens."
            descHi="सरसैया घाट, कानपुर में आयोजित गंगा मेला महोत्सव। AIOOP के होली मिलन कैंप में जनप्रतिनिधियों एवं सम्मानित नागरिकों का स्वागत किया गया।"
            count={gangaMelaPhotos.length}
            coverImages={gangaCovers}
            onClick={() => setOpenGallery('ganga-mela')}
            language={language}
          />

          {/* Tile 2 — Executive Committee Meeting */}
          <GalleryTile
            icon={Images}
            badgeEn="Meeting"
            badgeHi="बैठक"
            titleEn="Executive Committee Meeting"
            titleHi="कार्य समिति की बैठक"
            dateEn="29 March 2026"
            dateHi="29 मार्च 2026"
            descEn="Executive Committee Meeting of the All India Organization of Pensioners, Kanpur, held on Sunday, 29 March 2026."
            descHi="ऑल इंडिया ऑर्गनाइजेशन ऑफ पेंशनर्स, कानपुर की कार्य समिति की बैठक, दिनांक 29 मार्च 2026, दिन रविवार।"
            count={execMeetingPhotos.length}
            coverImages={execCovers}
            onClick={() => setOpenGallery('exec-meeting')}
            language={language}
          />
        </div>
      </div>

      {/* Ganga Mela Dialog */}
      <GalleryDialog
        isOpen={openGallery === 'ganga-mela'}
        onClose={() => setOpenGallery(null)}
        titleEn="Holi Ganga Mela – 10 March 2026"
        titleHi="होली गंगा मेला – 10 मार्च 2026"
        dateEn="10 March 2026 · Sarsaiya Ghat, Kanpur"
        dateHi="10 मार्च 2026 · सरसैया घाट, कानपुर नगर"
        descEn="On Tuesday, 10 March 2026, the District Administration of Kanpur Nagar organized the Ganga Mela festival at Sarsaiya Ghat. AIOOP hosted a Holi Milan Camp and welcomed public representatives and respected citizens. The organization also visited other Holi Milan camps and exchanged festive greetings."
        descHi="दिनांक 10/03/2026 दिन मंगलवार को जिला प्रशासन कानपुर नगर द्वारा सरसैया घाट कानपुर नगर में आयोजित गंगा मेला महोत्सव में ऑल इंडिया ऑर्गनाइजेशन ऑफ पेंशनर्स कानपुर के होली मिलन कैंप में आये समस्त जनप्रतिनिधियों एवं सम्मानित नागरिकों का संगठन की तरफ से स्वागत किया गया।"
        photos={gangaMelaPhotos}
        language={language}
      />

      {/* Exec Meeting Dialog */}
      <GalleryDialog
        isOpen={openGallery === 'exec-meeting'}
        onClose={() => setOpenGallery(null)}
        titleEn="Executive Committee Meeting – 29 March 2026"
        titleHi="कार्य समिति की बैठक – 29 मार्च 2026"
        dateEn="29 March 2026 · AIOOP, Kanpur"
        dateHi="29 मार्च 2026 · ऑल इंडिया ऑर्गनाइजेशन ऑफ पेंशनर्स, कानपुर"
        descEn="Executive Committee Meeting of the All India Organization of Pensioners, Kanpur, held on Sunday, 29 March 2026."
        descHi="दिनांक 29/03/2026 दिन रविवार को आयोजित ऑल इंडिया ऑर्गनाइजेशन ऑफ पेंशनर्स, कानपुर की कार्य समिति की बैठक।"
        photos={execMeetingPhotos}
        language={language}
      />
    </>
  );
}
