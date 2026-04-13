import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Images, CalendarDays, Play } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

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

// ── Scholarship Distribution Program ─────────────────────────────────────────
import sd1 from '@/assets/scholarship-10-04-2026/1.png';
import sd2 from '@/assets/scholarship-10-04-2026/2.png';

const scholarshipVideoUrl = 'https://www.youtube.com/embed/eNyHc6Bo8PU?rel=0&playsinline=1';
const scholarshipVideoThumb = 'https://img.youtube.com/vi/eNyHc6Bo8PU/hqdefault.jpg';

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

const scholarshipPhotos = [
  { src: sd1, captionEn: 'Scholarship distribution ceremony with students and guests on stage', captionHi: 'मंच पर विद्यार्थियों एवं अतिथियों के साथ छात्रवृत्ति वितरण समारोह' },
  { src: sd2, captionEn: 'Student receiving scholarship cheque during the program', captionHi: 'कार्यक्रम के दौरान छात्रा को छात्रवृत्ति चेक प्रदान करते हुए' },
];

// ── Types ─────────────────────────────────────────────────────────────────────
interface Photo { src: string; captionEn: string; captionHi: string; }
type GalleryId = 'ganga-mela' | 'exec-meeting' | 'scholarship-distribution';
type SortOrder = 'desc' | 'asc';

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
  videoUrl?: string;
  videoTitleEn?: string;
  videoTitleHi?: string;
  language: string;
}

// ── Lightbox + Dialog ─────────────────────────────────────────────────────────
function GalleryDialog({
  isOpen, onClose, titleEn, titleHi, descEn, descHi, dateEn, dateHi, photos, videoUrl, videoTitleEn, videoTitleHi, language,
}: GalleryDialogProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [playVideo, setPlayVideo] = useState(false);

  const caption = (p: Photo) => language === 'hi' ? p.captionHi : p.captionEn;
  const title   = language === 'hi' ? titleHi : titleEn;

  useEffect(() => {
    if (!isOpen) {
      setLightboxIndex(null);
      setPlayVideo(false);
    }
  }, [isOpen]);

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
          <div className="space-y-4">
            {videoUrl && (
              <div className="overflow-hidden rounded-2xl border border-border/50 bg-muted/20">
                <div className="aspect-video w-full">
                  {playVideo ? (
                    <iframe
                      src={videoUrl}
                      title={language === 'hi' ? (videoTitleHi ?? titleHi) : (videoTitleEn ?? titleEn)}
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => setPlayVideo(true)}
                      className="group relative block h-full w-full overflow-hidden"
                      aria-label={language === 'hi' ? 'वीडियो चलाएं' : 'Play video'}
                    >
                      <img
                        src={scholarshipVideoThumb}
                        alt={language === 'hi' ? 'कार्यक्रम वीडियो थंबनेल' : 'Program video thumbnail'}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/35 transition-colors group-hover:bg-black/25" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/92 text-primary shadow-lg">
                          <Play className="ml-1 h-7 w-7 fill-current" />
                        </span>
                      </div>
                    </button>
                  )}
                </div>
              </div>
            )}

            {photos.length > 0 && (
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
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-black/5 to-transparent sm:opacity-0 sm:transition-opacity sm:duration-200 sm:group-hover:opacity-100">
                      <p className="w-full px-2 pb-2 text-center text-[10px] font-medium leading-tight text-white line-clamp-2 sm:text-[11px]">
                        {caption(photo)}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            )}
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
  countLabelEn?: string;
  countLabelHi?: string;
  coverImages: string[];
  onClick: () => void;
  language: string;
}

interface GalleryItem {
  id: GalleryId;
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
  countLabelEn?: string;
  countLabelHi?: string;
  coverImages: string[];
  sortDate: string;
}

function GalleryTile({ icon: Icon, badgeEn, badgeHi, titleEn, titleHi, dateEn, dateHi, descEn, descHi, count, countLabelEn, countLabelHi, coverImages, onClick, language }: TileProps) {
  const badge = language === 'hi' ? badgeHi : badgeEn;
  const title = language === 'hi' ? titleHi : titleEn;
  const date  = language === 'hi' ? dateHi  : dateEn;
  const desc  = language === 'hi' ? descHi  : descEn;
  const countLabel = language === 'hi' ? (countLabelHi ?? 'फ़ोटो') : (countLabelEn ?? 'Photos');

  return (
    <button
      onClick={onClick}
      className="group relative w-full overflow-hidden rounded-2xl border border-primary/20 bg-card/90 p-4 text-left shadow-[0_12px_40px_-16px_rgba(120,0,20,0.28)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_50px_-16px_rgba(120,0,20,0.42)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:p-5"
    >
      {/* 2×2 photo collage */}
      <div className="relative mb-4 w-full overflow-hidden rounded-xl border-2 border-primary/25 aspect-video">
        {coverImages.length === 1 ? (
          <div className="h-full w-full">
            <img src={coverImages[0]} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
        ) : coverImages.length === 2 ? (
          <div className="grid h-full grid-cols-2 gap-0.5">
            {coverImages.map((src, i) => (
              <div key={i} className="relative h-full overflow-hidden">
                <img src={src} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid h-full grid-cols-2 grid-rows-2 gap-0.5">
            {coverImages.slice(0, 4).map((src, i) => (
              <div key={i} className="relative overflow-hidden">
                <img src={src} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
            ))}
          </div>
        )}
        {/* shimmer overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-50 pointer-events-none" />
        {/* photo count badge */}
        <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
          <Images className="h-3 w-3" />
          {count} {countLabel}
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
  const [openGallery, setOpenGallery] = useState<GalleryId | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');

  const gangaCovers = gangaMelaPhotos.slice(0, 4).map(p => p.src);
  const execCovers  = execMeetingPhotos.slice(0, 4).map(p => p.src);
  const scholarshipCovers = scholarshipPhotos.map(p => p.src);
  const galleryItems: GalleryItem[] = [
    {
      id: 'ganga-mela',
      icon: CalendarDays,
      badgeEn: 'Event',
      badgeHi: 'कार्यक्रम',
      titleEn: 'Holi Ganga Mela 2026',
      titleHi: 'होली गंगा मेला 2026',
      dateEn: '10 March 2026',
      dateHi: '10 मार्च 2026',
      descEn: 'Ganga Mela festival at Sarsaiya Ghat, Kanpur. AIOOP hosted a Holi Milan Camp and welcomed public representatives and respected citizens.',
      descHi: 'सरसैया घाट, कानपुर में आयोजित गंगा मेला महोत्सव। AIOOP के होली मिलन कैंप में जनप्रतिनिधियों एवं सम्मानित नागरिकों का स्वागत किया गया।',
      count: gangaMelaPhotos.length,
      coverImages: gangaCovers,
      sortDate: '2026-03-10',
    },
    {
      id: 'exec-meeting',
      icon: Images,
      badgeEn: 'Meeting',
      badgeHi: 'बैठक',
      titleEn: 'Executive Committee Meeting',
      titleHi: 'कार्य समिति की बैठक',
      dateEn: '29 March 2026',
      dateHi: '29 मार्च 2026',
      descEn: 'Executive Committee Meeting of the All India Organization of Pensioners, Kanpur, held on Sunday, 29 March 2026.',
      descHi: 'ऑल इंडिया ऑर्गनाइजेशन ऑफ पेंशनर्स, कानपुर की कार्य समिति की बैठक, दिनांक 29 मार्च 2026, दिन रविवार।',
      count: execMeetingPhotos.length,
      coverImages: execCovers,
      sortDate: '2026-03-29',
    },
    {
      id: 'scholarship-distribution',
      icon: CalendarDays,
      badgeEn: 'Scholarship',
      badgeHi: 'छात्रवृत्ति',
      titleEn: 'Scholarship Distribution Program',
      titleHi: 'छात्रवृत्ति वितरण कार्यक्रम',
      dateEn: '10 April 2026',
      dateHi: '10 अप्रैल 2026',
      descEn: 'AIOOP Kanpur organized a scholarship distribution program at Omkareshwar Saraswati Vidya Niketan Inter College, Jawahar Nagar, where 28 students received scholarships worth Rs. 1,65,000 by cheque.',
      descHi: 'ऑल इंडिया ऑर्गनाइजेशन ऑफ पेंशनर्स, कानपुर द्वारा ओंकारेश्वर सरस्वती विद्या निकेतन इंटर कॉलेज, जवाहर नगर में छात्रवृत्ति वितरण कार्यक्रम आयोजित किया गया, जिसमें 28 छात्र-छात्राओं को कुल 1,65,000 रुपये की छात्रवृत्ति चेक के माध्यम से प्रदान की गई।',
      count: scholarshipPhotos.length,
      coverImages: scholarshipCovers,
      sortDate: '2026-04-10',
    },
  ];

  const sortedGalleryItems = [...galleryItems].sort((a, b) => {
    const aTime = new Date(a.sortDate).getTime();
    const bTime = new Date(b.sortDate).getTime();
    return sortOrder === 'desc' ? bTime - aTime : aTime - bTime;
  });

  return (
    <>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 py-20">
        <div className="mb-2 md:mb-4 lg:mb-6 pt-28 pb-10 md:pt-32 md:pb-14 lg:pt-36 lg:pb-16">
          <div className="flex items-start justify-between gap-3 sm:gap-4">
            <h1 className="min-w-0 pr-2 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-display-lg xl:text-display-xl">
              {t.gallery.title}
            </h1>

            <button
              type="button"
              onClick={() => setSortOrder(current => current === 'desc' ? 'asc' : 'desc')}
              className="shrink-0 rounded-full border border-primary/20 bg-card px-3 py-2 text-xs font-semibold text-foreground shadow-sm transition hover:border-primary/40 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:px-4 sm:text-sm"
              aria-label={language === 'hi' ? 'तारीख के अनुसार क्रम बदलें' : 'Toggle sort by date'}
            >
              {language === 'hi'
                ? (sortOrder === 'desc' ? 'दिखाया जा रहा है: नवीनतम पहले' : 'दिखाया जा रहा है: पुरानी पहले')
                : (sortOrder === 'desc' ? 'Showing: Newest first' : 'Showing: Oldest first')}
            </button>
          </div>

          <div className="mt-6 md:mt-8">
            <p className="max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg lg:text-body-lg">
              {t.gallery.desc}
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:max-w-none xl:grid-cols-3 lg:gap-8">
          {sortedGalleryItems.map((item) => (
            <GalleryTile
              key={item.id}
              icon={item.icon}
              badgeEn={item.badgeEn}
              badgeHi={item.badgeHi}
              titleEn={item.titleEn}
              titleHi={item.titleHi}
              dateEn={item.dateEn}
              dateHi={item.dateHi}
              descEn={item.descEn}
              descHi={item.descHi}
              count={item.count}
              countLabelEn={item.countLabelEn}
              countLabelHi={item.countLabelHi}
              coverImages={item.coverImages}
              onClick={() => setOpenGallery(item.id)}
              language={language}
            />
          ))}
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

      <GalleryDialog
        isOpen={openGallery === 'scholarship-distribution'}
        onClose={() => setOpenGallery(null)}
        titleEn="Scholarship Distribution Program – 10 April 2026"
        titleHi="छात्रवृत्ति वितरण कार्यक्रम – 10 अप्रैल 2026"
        dateEn="10 April 2026 · Jawahar Nagar, Kanpur"
        dateHi="10 अप्रैल 2026 · जवाहर नगर, कानपुर"
        descEn="AIOOP Kanpur organized the scholarship distribution program at Omkareshwar Saraswati Vidya Niketan Inter College, Jawahar Nagar. Scholarships worth Rs. 1,65,000 were distributed by cheque to 28 economically weaker and meritorious students. The ceremony was conducted by Mahasachiv O.P. Srivastava and chaired by retired IPS officer Ratan Kumar Srivastava, with office bearers, executive members and school dignitaries in attendance."
        descHi="ऑल इंडिया ऑर्गनाइजेशन ऑफ पेंशनर्स, कानपुर द्वारा ओंकारेश्वर सरस्वती विद्या निकेतन इंटर कॉलेज, जवाहर नगर में छात्रवृत्ति वितरण कार्यक्रम आयोजित किया गया। आर्थिक रूप से कमजोर एवं मेधावी 28 छात्र-छात्राओं को कुल 1,65,000 रुपये की छात्रवृत्ति चेक के माध्यम से प्रदान की गई। कार्यक्रम का संचालन महासचिव ओ.पी. श्रीवास्तव ने किया तथा अध्यक्षता सेवानिवृत्त आई.पी.एस. रतन कुमार श्रीवास्तव ने की। कार्यक्रम में संगठन के पदाधिकारी, कार्यकारिणी सदस्य और विद्यालय के गणमान्य अतिथि उपस्थित रहे।"
        photos={scholarshipPhotos}
        videoUrl={scholarshipVideoUrl}
        videoTitleEn="Scholarship Distribution Program Video"
        videoTitleHi="छात्रवृत्ति वितरण कार्यक्रम वीडियो"
        language={language}
      />
    </>
  );
}
