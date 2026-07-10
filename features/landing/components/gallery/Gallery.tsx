"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Link } from "@/features/i18n/routing";
import { galleryImagesByYear } from "./data/galleryData";

const galleryYears = Object.keys(galleryImagesByYear)
  .map(Number)
  .sort((a, b) => b - a);

const carouselDuration = 22;

const GraduatesGallery = () => {
  const [activeYearIndex, setActiveYearIndex] = useState(0);

  const activeYear = galleryYears[activeYearIndex] ?? galleryYears[0];
  const galleryImages =
    galleryImagesByYear[activeYear] ?? galleryImagesByYear[galleryYears[0]];
  const galleryTrackImages = useMemo(
    () => [...galleryImages, ...galleryImages, ...galleryImages],
    [galleryImages],
  );

  const showPreviousYear = () => {
    setActiveYearIndex(
      (currentIndex) => (currentIndex + 1) % galleryYears.length,
    );
  };

  const showNextYear = () => {
    setActiveYearIndex(
      (currentIndex) =>
        (currentIndex - 1 + galleryYears.length) % galleryYears.length,
    );
  };

  return (
    <section
      id="graduates-gallery"
      aria-labelledby="graduates-gallery-title"
      className="overflow-hidden bg-[#0F1114] px-4 py-14 text-white md:py-18 lg:py-20"
    >
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <clipPath
            id="graduates-gallery-tablet-mask"
            clipPathUnits="objectBoundingBox"
          >
            <path d="M 0 .08 C .13 .15 .29 .18 .5 .18 C .71 .18 .87 .15 1 .08 L 1 .92 C .87 .85 .71 .82 .5 .82 C .29 .82 .13 .85 0 .92 Z" />
          </clipPath>
          <clipPath
            id="graduates-gallery-desktop-mask"
            clipPathUnits="objectBoundingBox"
          >
            <path d="M 0 0 C .12 .09 .27 .18 .5 .18 C .73 .18 .88 .09 1 0 L 1 1 C .88 .91 .73 .82 .5 .82 C .27 .82 .12 .91 0 1 Z" />
          </clipPath>
        </defs>
      </svg>
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center">
        <div className="relative h-[74px] w-[260px] md:h-[88px] md:w-[340px]">
          <h2 id="graduates-gallery-title" className="sr-only">
            გალერეა
          </h2>
          <svg
            className="absolute inset-x-0 top-0 h-full w-full overflow-visible"
            viewBox="0 0 340 98"
            aria-hidden="true"
          >
            <defs>
              <path
                id="gallery-title-curve"
                d="M 72 58 Q 170 7 268 58"
                fill="none"
              />
            </defs>
            <text
              fill="#2BCAFF"
              fontSize="31"
              fontWeight="700"
              letterSpacing="3"
            >
              <textPath
                href="#gallery-title-curve"
                startOffset="50%"
                textAnchor="middle"
              >
                გალერეა
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 text-[14px] font-bold leading-none tracking-[1px] text-white md:text-[16px]">
            <button
              type="button"
              aria-label="Show previous gallery year"
              onClick={showPreviousYear}
              className="text-[22px] font-normal leading-none"
            >
              <Image
                src={"/icons/left-arrow.svg"}
                alt=""
                width={16}
                height={33}
              />
            </button>
            <span aria-live="polite" className="text-[25px]">
              {activeYear}
            </span>
            <button
              type="button"
              aria-label="Show next gallery year"
              onClick={showNextYear}
              className="text-[22px] font-normal leading-none"
            >
              <Image
                src={"/icons/left-arrow.svg"}
                alt=""
                width={16}
                height={33}
                className="rotate-180"
              />
            </button>
          </div>
        </div>

        <div className="relative mt-2 w-full">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-[46%] h-24 w-[78%] -translate-x-1/2 rounded-[50%] bg-[#2BCAFF]/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-[-28px] mx-auto h-20 max-w-[860px] rounded-[50%] "
          />

          <div className="graduates-gallery-carousel relative mx-auto h-[262px] w-full max-w-[1040px] overflow-hidden">
            <div
              key={activeYear}
              className="graduates-gallery-track flex h-full"
            >
              {galleryTrackImages.map((image, index) => (
                <figure
                  key={`${activeYear}-${image.id}-${index}`}
                  className="graduates-gallery-card h-full shrink-0 overflow-hidden bg-cover"
                  style={{
                    backgroundImage: `url(${image.src})`,
                    backgroundPosition: image.position,
                  }}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="relative mt-8 flex flex-col items-center gap-2 text-[13px] font-bold tracking-[1px] text-white md:mt-10 md:text-[15px]">
          <Link href={`/gallery?year=${activeYear}`}>
            {" "}
            <div className="flex relative items-center gap-2">
              <svg
                width="153"
                height="45"
                viewBox="0 0 153 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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

              <span className="absolute top-[-5px] left-1/2 -translate-x-1/2">
                <span className="whitespace-nowrap">იხილე ყველა</span>
              </span>
            </div>
          </Link>
        </div>
      </div>

      <style>
        {`
          .graduates-gallery-carousel {
            --card-width: 198px;
            --card-gap: 18px;
            --card-step: calc(var(--card-width) + var(--card-gap));
            --cycle-width: calc(
              var(--card-step) +
              var(--card-step) +
              var(--card-step) +
              var(--card-step) +
              var(--card-step)
            );
            max-width: calc(
              (var(--card-width) * 1.5) + var(--card-gap)
            );
            clip-path: url(#graduates-gallery-tablet-mask);
          }

          .graduates-gallery-track {
            gap: var(--card-gap);
            animation: graduates-gallery-track ${carouselDuration}s linear infinite;
            will-change: transform;
          }

          .graduates-gallery-card {
            width: var(--card-width);
          }

          @media (min-width: 768px) {
            .graduates-gallery-carousel {
              max-width: calc(
                (var(--card-width) * 3) + (var(--card-gap) * 2)
              );
            }
          }

          @media (min-width: 1024px) {
            .graduates-gallery-carousel {
              max-width: calc(
                (var(--card-width) * 5) + (var(--card-gap) * 4)
              );
              clip-path: url(#graduates-gallery-desktop-mask);
            }
          }

          @keyframes graduates-gallery-track {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(calc(0px - var(--cycle-width)));
            }
          }
        `}
      </style>
    </section>
  );
};

export default GraduatesGallery;
