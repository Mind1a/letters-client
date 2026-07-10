"use client";

import Image from "next/image";
import { useState } from "react";
import Vector from "@/public/images/Vector.svg";

type SemesterDropdownProps = {
  value: string;
  error?: string;
  onChange: (value: string) => void;
};

const semesters = [
  "1st semester",
  "2nd semester",
  "3rd semester",
  "4th semester",
  "5th semester",
  "6th semester",
  "7th semester",
  "8th semester",
];

const SemesterDropdown = ({
  value,
  error,
  onChange,
}: SemesterDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (semester: string) => {
    onChange(semester);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex h-[52px] w-full cursor-pointer items-center justify-between rounded-[8px] border bg-[#111817] xl:h-[59px] ${
          error ? "border-[#FF3B30]" : "border-[#343434]"
        }`}
      >
        <span
          className={`pl-[10px] text-[12px] leading-[20px] xl:pl-[16px] xl:text-[18px] ${
            error ? "text-[#FF3B30]" : "text-[#B3B3B3]"
          }`}
        >
          {value || "Select your current semester"}
        </span>

        <span className="mr-[10px] flex h-[24px] w-[24px] shrink-0 items-center justify-center xl:mr-[16px]">
          <Vector className="block xl:hidden" />

          <span className="relative hidden h-[24px] w-[24px] overflow-hidden xl:block">
            <Image
              src="/images/Iconsdesktop.png"
              alt="Dropdown"
              width={524}
              height={524}
              className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
            />
          </span>
        </span>
      </button>

      {error && (
        <p className="mt-[4px] text-[10px] leading-[14px] text-[#FF3B30]">
          {error}
        </p>
      )}

      {isOpen && (
        <div className="absolute left-0 top-[60px] z-50 w-full overflow-hidden rounded-[8px] border border-[#343434] bg-[#111817] xl:top-[67px]">
          {semesters.map((semester) => (
            <button
              key={semester}
              type="button"
              onClick={() => handleSelect(semester)}
              className="w-full cursor-pointer px-[10px] py-[12px] text-left text-[12px] text-white transition-colors hover:bg-[#1D2625] xl:px-[16px] xl:text-[18px]"
            >
              {semester}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SemesterDropdown;
