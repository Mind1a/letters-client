"use client";
import { navItems } from "@/common/data/headerData";
import LocaleSwitcher from "@/features/i18n/LocaleSwitcher";
import { usePathname } from "@/features/i18n/routing";
import ThemeSwitcher from "@/features/theme/components/composites/ThemeSwitcher";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const t = useTranslations();
  const pathname = usePathname();
  return (
    <div className="bg-background border border-b border-[#0A0A0A] min-w-full h-23.5">
      <div className="w-full  max-w-6xl mx-auto h-full">
        <div className="w-full flex justify-between items-center h-full">
          <Image
            src="/images/header/unilab.svg"
            alt="Unilab Logo"
            width={92}
            height={62}
          />
          <nav className="max-w-[547px] w-full flex justify-between items-center">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`relative text-[18px] leading-[130%] py-2 after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-full after:rounded-full after:transition-colors after:duration-300 ${
                  pathname === item.href
                    ? "after:bg-[#2BCAFF]"
                    : "after:bg-transparent"
                }`}
              >
                {t(item.label)}
              </Link>
            ))}
          </nav>
          <div className="max-w-[155px] w-full flex items-center gap-10 pl-4">
            <LocaleSwitcher />
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
