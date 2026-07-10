import Image from "next/image";
import Link from "next/link";

import Linkedin from "/public/images/footer/LinkedinLogo.svg";
import Tiktok from "/public/images/footer/TiktokLogo.svg";
import Fb from "/public/images/footer/FbLogo.svg";
import Ig from "/public/images/footer/IgLogo.svg";
import YouTube from "/public/images/footer/YouTubeLogo.svg";

import Iliauni from "/public/images/footer/IliauniLogo.svg";
import Unilab from "/public/images/footer/UnilabLogo.svg";

import { footerData } from "../../data/footerData";

const socialIcons = { Linkedin, Tiktok, Fb, Ig, YouTube };
type SocialIconKey = keyof typeof socialIcons;

const Footer = () => {
  return <footer className="w-full bg-[#0A0A0A] flex justify-center 2xl:p-[24px_144px] xl:p-[20px_144px_10px] lg:p-[20px_144px_10px] p-0 border-t-[0.5px] border-[#333333] shadow-[0px_-2px_16px_0px_rgba(255,255,255,0.1)] relative z-50">
    <div className="lg:flex hidden flex-col max-w-480 w-full 2xl:gap-2 gap-7.5">
      <div className="flex justify-between items-center">

        <Link href="/" aria-label="Go to homepage">
          <Image alt="UniLab Logo" src="/images/logo/Logo.svg" width={104.91} height={74.32} />
        </Link>

        <nav className="text-[#FFFFFF] text-[12px] leading-6 flex flex-col items-center gap-0.5">
          {footerData.nav.map((item) => <Link key={item.label} href={item.href}>{item.label}</Link>)}
        </nav>

        <div className="flex flex-col gap-1 items-center justify-center">
          <div className="flex gap-4">
            {footerData.socialLinks.map((item) => {
              const Icon = socialIcons[item.icon as SocialIconKey];
              return (<a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.name} className="flex items-center justify-center"><Icon /></a>);
            })}
          </div>

          <a href={`mailto:${footerData.email}`} className="text-[10px] leading-6 text-[#FFFFFF]">{footerData.email}</a>
        </div>

        <div className="flex gap-5">
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Ilia State University" className="flex items-center justify-center"><Iliauni /></a>

          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="UniLab" className="flex items-center justify-center"><Unilab /></a>
        </div>

      </div>
      <p className="text-[#FFFFFF] text-[10px] leading-5 font-bold 2xl:pl-8 2xl:text-left text-center lg:block hidden">{footerData.copyright}</p>
    </div>

    <div className="flex lg:hidden flex-col w-full">
      <div className="bg-[#121212] p-[32px_16px_0px]">

        <div className="flex justify-between items-center">
          <Link href="/" aria-label="Go to homepage">
            <Image alt="Logo" src="/images/logo/Logo.svg" width={95.6} height={74.32} />
          </Link>

          <div className="flex gap-5">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Ilia State University" className="flex items-center justify-center">
              <Image alt="Iliauni Logo" src="/images/footer/IliauniLogo.svg" width={50} height={48} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="UniLab">
              <Image alt="UniLab Logo" src="/images/footer/UnilabLogo.svg" width={36} height={48} />
            </a>
          </div>
        </div>

        <nav className="mt-12 text-[#FFFFFF] text-[12px] leading-4 flex flex-col items-center gap-3">
          {footerData.nav.map((item) => <Link key={item.label} href={item.href}>{item.label}</Link>)}
        </nav>

        <div className="text-[#FFFFFF] flex flex-col items-center gap-2 mt-6 mb-8">
          <p className="text-[14px] leading-4">{footerData.mobile.contactTitle}</p>
          <div className="flex gap-1">
            <Image alt="Logo" src="/images/footer/Email.svg" width={24} height={12.93} />
            <a href={`mailto:${footerData.email}`} className="text-[12px] leading-4">{footerData.email}</a>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-col items-center gap-[25.5px]">
        <div className="flex gap-[25.5px]">
          {footerData.socialLinks.map((item) => {
            const Icon = socialIcons[item.icon as SocialIconKey];
            return (<a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.name} className="flex items-center justify-center"><Icon /></a>);
          })}
        </div>

        <p className="text-[#FFFFFF] text-[10px] leading-5 font-bold pb-4">{footerData.copyright}</p>
      </div>
    </div>
  </footer>
};

export default Footer;