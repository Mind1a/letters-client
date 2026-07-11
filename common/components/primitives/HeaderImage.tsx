import Image from "next/image";

const HeaderImage = () => {
  return (
    <div className="relative w-full h-137.5">
      <Image
        src="/images/header/header.png"
        alt="Unilab Logo"
        fill
        className="object-cover"
      />
    </div>
  );
};

export default HeaderImage;
