"use client";

import { useState } from "react";
import Vector from "@/public/images/Vector.svg";

type ReceiveDropdownProps = {
  error?: string;
};

const ReceiveDropdown = ({ error }: ReceiveDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative mt-[24px]">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex h-[52px] w-full cursor-pointer items-center justify-between rounded-[8px] border bg-[#111817] xl:h-[59px] ${
          error ? "border-[#FF3B30]" : "border-[#343434]"
        }`}
      >
        <span
          className={`pl-[10px] text-[12px] font-normal leading-[20px] xl:pl-[16px] xl:text-[18px] ${
            error ? "text-[#FF3B30]" : "text-[#B3B3B3]"
          }`}
        >
          Select when you want to receive your letter
        </span>

        <Vector className="mr-[10px]" />
      </button>

      {error && (
        <p className="mt-[4px] text-[10px] leading-[14px] text-[#FF3B30]">
          {error}
        </p>
      )}

      {isOpen && (
        <div className="absolute left-0 top-[60px] z-50 w-full overflow-hidden rounded-[8px] border border-[#343434] bg-[#111817] xl:top-[67px]">
          <button
            type="button"
            className="w-full cursor-pointer px-[10px] py-[12px] text-left text-[12px] text-white transition-colors hover:bg-[#1D2625] xl:px-[16px] xl:text-[18px]"
          >
            Graduation
          </button>

          <button
            type="button"
            className="w-full cursor-pointer px-[10px] py-[12px] text-left text-[12px] text-white transition-colors hover:bg-[#1D2625] xl:px-[16px] xl:text-[18px]"
          >
            Custom date
          </button>
        </div>
      )}
    </div>
  );
};

export default ReceiveDropdown;
