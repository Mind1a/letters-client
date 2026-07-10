"use client";
type DesktopThemeSwitcherProps = {
  isLight: boolean;
  setTheme: (theme: "dark" | "light") => void;
};

const DesktopThemeSwitcher: React.FC<DesktopThemeSwitcherProps> = ({
  isLight,
  setTheme,
}) => {
  return (
    <div>
      <button
        onClick={() => setTheme(isLight ? "dark" : "light")}
        className="cursor-pointer bg-blue-400"
      >
        {isLight ? "dark 🌑" : " ☀️ light"}
      </button>
    </div>
  );
};

export default DesktopThemeSwitcher;
