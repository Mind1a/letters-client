import Image from "next/image";
import Link from "next/link";
import { galleryImagesByYear } from "@/features/landing/components/gallery/data/galleryData";

type GalleryPageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ year?: string | string[] }>;
};

const galleryYears = Object.keys(galleryImagesByYear)
  .map(Number)
  .sort((a, b) => b - a);

const getRequestedYear = (year: string | string[] | undefined) => {
  const value = Array.isArray(year) ? year[0] : year;
  const numericYear = Number(value);

  if (Number.isFinite(numericYear) && galleryImagesByYear[numericYear]) {
    return numericYear;
  }

  return galleryYears[0];
};

const GalleryPage = async ({ params, searchParams }: GalleryPageProps) => {
  const { locale } = await params;
  const { year } = await searchParams;

  const activeYear = getRequestedYear(year);
  const activeYearIndex = galleryYears.indexOf(activeYear);
  const previousYear =
    galleryYears[(activeYearIndex + 1) % galleryYears.length];
  const nextYear =
    galleryYears[
      (activeYearIndex - 1 + galleryYears.length) % galleryYears.length
    ];
  const galleryImages =
    galleryImagesByYear[activeYear] ?? galleryImagesByYear[galleryYears[0]];

  return (
    <main className="min-h-screen bg-[#0F1114] px-4 py-10 text-white md:px-8 md:py-14">
      <section className="mx-auto flex w-full max-w-[820px] flex-col items-center">
        <div className="mb-8 flex items-center justify-center gap-3 font-bold leading-none tracking-[1px] text-[#2BCAFF]">
          <Link
            href={`/${locale}/gallery?year=${previousYear}`}
            aria-label={`Show ${previousYear} gallery`}
            className="flex h-8 w-8 items-center justify-center"
          >
            <Image
              src="/icons/left-arrow.svg"
              alt=""
              width={16}
              height={33}
              className="w-auto"
            />
          </Link>
          <h1 className="text-[24px] leading-none">{activeYear}</h1>
          <Link
            href={`/${locale}/gallery?year=${nextYear}`}
            aria-label={`Show ${nextYear} gallery`}
            className="flex h-8 w-8 items-center justify-center"
          >
            <Image
              src="/icons/left-arrow.svg"
              alt=""
              width={16}
              height={33}
              className="w-auto rotate-180"
            />
          </Link>
        </div>

        <div className="w-full columns-2 gap-3 md:columns-4 md:gap-4">
          {galleryImages.map((image) => (
            <figure
              key={`${activeYear}-${image.id}`}
              className="mb-3 break-inside-avoid overflow-hidden rounded-[5px] md:mb-4"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="block h-auto w-full"
                style={{ objectPosition: image.position }}
              />
            </figure>
          ))}
        </div>

        <div className="relative mt-10 flex items-center justify-center text-[13px] font-bold tracking-[1px] text-white md:mt-12">
          <div className="relative flex items-center gap-2">
            <svg
              width="153"
              height="45"
              viewBox="0 0 153 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M151.869 43.7513L133.858 26.578H21.2865L6.14062 8.58691"
                stroke="white"
                strokeWidth="2"
              />
              <path d="M43.8008 32.3018H116.256" stroke="white" />
              <path
                d="M4.50293 1C6.43841 1.00005 8.00581 2.56713 8.00586 4.49805C8.00586 6.429 6.43844 7.99604 4.50293 7.99609C2.56738 7.99609 1 6.42903 1 4.49805C1.00005 2.5671 2.56741 1 4.50293 1Z"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
            <span className="absolute left-1/2 top-[-5px] -translate-x-1/2 whitespace-nowrap">
              See More
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GalleryPage;
