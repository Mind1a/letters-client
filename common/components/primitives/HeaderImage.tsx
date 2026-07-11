import Image from "next/image";

const HeaderImage = () => {
  return (
    <div className="relative w-full h-55.5 md:h-80 lg:h-137.5">
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
