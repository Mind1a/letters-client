"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import Vector from "@/public/images/Vector.svg";

export type ReceiveOption = "" | "graduation" | "customDate";

type ReceiveDropdownProps = {
  value: ReceiveOption;
  error?: string;
  onChange: (value: ReceiveOption) => void;
};

const ReceiveDropdown = ({ value, error, onChange }: ReceiveDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dateInputRef = useRef<HTMLInputElement>(null);

  const isCustomDate = value === "customDate";

  const buttonText =
    value === "graduation"
      ? "მიიღე წერილი გამოსაშვებზე"
      : isCustomDate
      ? "მონიშნე კალენდარში"
      : "აირჩიე წერილის მიღების თარიღი";

  const handleButtonClick = () => {
    if (isCustomDate) {
      dateInputRef.current?.showPicker?.();
      dateInputRef.current?.click();
      return;
    }

    setIsOpen((prev) => !prev);
  };

  const handleSelect = (option: Exclude<ReceiveOption, "">) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={handleButtonClick}
        className={`flex h-[52px] w-full cursor-pointer items-center justify-between rounded-[8px] border bg-[#111817] xl:h-[59px] ${
          error ? "border-[#FF3B30]" : "border-[#343434]"
        }`}
      >
        <span
          className={`min-w-0 flex-1 truncate pl-[10px] text-left text-[12px] font-normal leading-[20px] xl:pl-[16px] xl:text-[18px] ${
            error ? "text-[#FF3B30]" : "text-[#B3B3B3]"
          }`}
        >
          {buttonText}
        </span>

        <span className="mr-[10px] flex h-[24px] w-[24px] items-center justify-center xl:mr-[16px]">
          {isCustomDate ? (
            <Image
              src="/images/calendar.png"
              alt="Calendar"
              width={24}
              height={24}
            />
          ) : (
            <Vector />
          )}
        </span>
      </button>

      <input ref={dateInputRef} type="date" className="sr-only" />

      {error && (
        <p className="mt-[4px] text-[10px] leading-[14px] text-[#FF3B30]">
          {error}
        </p>
      )}

      {isOpen && (
        <div className="absolute left-0 top-[60px] z-50 w-full overflow-hidden rounded-[8px] border border-[#343434] bg-[#111817] xl:top-[67px]">
          <button
            type="button"
            onClick={() => handleSelect("graduation")}
            className="w-full cursor-pointer px-[10px] py-[12px] text-left text-[12px] text-white hover:bg-[#1D2625] xl:px-[16px] xl:text-[18px]"
          >
            Graduation
          </button>

          <button
            type="button"
            onClick={() => handleSelect("customDate")}
            className="w-full cursor-pointer px-[10px] py-[12px] text-left text-[12px] text-white hover:bg-[#1D2625] xl:px-[16px] xl:text-[18px]"
          >
            Custom date
          </button>
        </div>
      )}
    </div>
  );
};

export default ReceiveDropdown;
