import Image from "next/image";
import Link from "next/link";

import Linkedin from "/public/images/footer/LinkedinLogo.svg";
import Tiktok from "/public/images/footer/TiktokLogo.svg";
import Fb from "/public/images/footer/FbLogo.svg";
import Ig from "/public/images/footer/IgLogo.svg";
import YouTube from "/public/images/footer/YouTubeLogo.svg";

import Iliauni from "/public/images/footer/IliauniLogo.svg";
import Unilab from "/public/images/footer/UnilabLogo.svg";

const Footer = () => {
  return <footer className="w-full bg-[#0A0A0A] flex justify-center 2xl:p-[24px_144px] xl:p-[20px_144px_10px] lg:p-[20px_144px_10px] p-0">
    <div className="lg:flex hidden flex-col max-w-480 w-full 2xl:gap-2 gap-7.5">
      <div className="flex justify-between items-center">
        <Link href="/" aria-label="Go to homepage">
          <Image alt="UniLab Logo" src="/images/logo/Logo.svg" width={104.91} height={74.32} />
        </Link>
        <nav className="text-[#FFFFFF] text-[12px] leading-6 flex flex-col items-center gap-0.5">
          <Link href="#">კონფიდენციალურობის პოლიტიკა</Link>
          <Link href="#">წესები და პირობები</Link>
        </nav>
        <div className="flex flex-col gap-1 items-center justify-center">
          <div className="flex gap-4">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Linkedin" className="flex items-center justify-center"><Linkedin /></a>

            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="Tiktok" className="flex items-center justify-center"><Tiktok /></a>

            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex items-center justify-center"><Fb /></a>

            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex items-center justify-center"><Ig /></a>

            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="flex items-center justify-center"><YouTube /></a>
          </div>
          <a href="mailto:infounilab@iliauni.edu.ge" className="text-[10px] leading-6 text-[#FFFFFF]">infounilab@iliauni.edu.ge</a>
        </div>
        <div className="flex gap-5">
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Ilia State University" className="flex items-center justify-center"><Iliauni /></a>

          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="UniLab" className="flex items-center justify-center"><Unilab /></a>
        </div>
      </div>
      <p className="text-[#FFFFFF] text-[10px] leading-5 font-bold 2xl:pl-8 2xl:text-left text-center lg:block hidden">Unilab ©</p>
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
          <Link href="#">კონფიდენციალურობის პოლიტიკა</Link>
          <Link href="#">წესები და პირობები</Link>
        </nav>

        <div className="text-[#FFFFFF] flex flex-col items-center gap-2 mt-6 mb-8">
          <p className="text-[14px] leading-4">Contact Us</p>

          <div className="flex gap-1">
            <Image alt="Logo" src="/images/footer/Email.svg" width={24} height={12.93} />
            <a href="mailto:infounilab@iliauni.edu.ge" className="text-[12px] leading-4">infounilab@iliauni.edu.ge</a>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-col items-center gap-[25.5px]">
        <div className="flex gap-[25.5px]">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Linkedin" className="flex items-center justify-center" ><Linkedin /></a>

          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="Tiktok" className="flex items-center justify-center" ><Tiktok /></a>

          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex items-center justify-center" ><Fb /></a>

          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex items-center justify-center" ><Ig /></a>

          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="flex items-center justify-center" ><YouTube /></a>
        </div>
        <p className="text-[#FFFFFF] text-[10px] leading-5 font-bold pb-4">Unilab ©</p>
      </div>
    </div>
  </footer>
};

export default Footer;
