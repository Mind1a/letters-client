"use client";

import Image from "next/image";

type DesktopThemeSwitcherProps = {
  isLight: boolean;
  setTheme: (theme: "dark" | "light") => void;
};

const DesktopThemeSwitcher: React.FC<DesktopThemeSwitcherProps> = ({
  isLight,
  setTheme,
}) => {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={isLight}
      aria-label="Toggle theme"
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className={`cursor-pointer w-15 h-8 rounded-full flex items-center transition-colors duration-300 ${
        isLight
          ? "bg-[#A0E6E3] justify-end pr-1"
          : "bg-[#484848] justify-start pl-1"
      }`}
    >
      <div
        className={`rounded-full w-7 h-7 flex items-center justify-center transition-colors duration-300 ${
          isLight ? "bg-white" : "bg-black"
        }`}
      >
        <Image
          src={`/images/header/${isLight ? "light" : "dark"}.svg`}
          alt={isLight ? "light mode" : "dark mode"}
          width={isLight ? 24 : 18}
          height={isLight ? 24 : 18}
        />
      </div>
    </button>
  );
};

export default DesktopThemeSwitcher;
