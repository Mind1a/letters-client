import { getTranslations } from "next-intl/server";

const AboutUs = async () => {
  const t = await getTranslations("aboutUs");
  return (
    <section
      id="aboutUs"
      aria-labelledby="about-us"
      className="mx-[16px] mt-[48px] md:mx-[119px] md:mt-[56px] lg:mx-[242px] lg:mt-[80px] flex justify-center items-center"
    >
      <div className="max-w-[956px] w-full">
        {/* top line */}
        <div aria-hidden="true" className="flex justify-end items-center">
          <div className="w-[50%] md:w-[40%] lg:w-[60%]  flex items-center">
            <div className="w-4 h-4 rounded-full border-2 border-foreground shrink-0" />
            <div className="flex-1 h-px bg-foreground" />
          </div>
        </div>

        {/* info */}
        <div className="my-[32px]">
          <h2
            id="about-us"
            className="text-[#2BCAFF] mb-[32px] text-center text-[24px] lg:text-[32px]"
          >
            {t("title")}
          </h2>
          <p className="text-[12px] lg:text-[18px] leading-[20px] lg:leading-[27px]">
            {t("body")}
          </p>
        </div>

        {/* bottom line */}
        <div aria-hidden="true" className="flex justify-start items-center">
          <div className="w-[50%] md:w-[40%] lg:w-[60%]  flex items-center">
            <div className="flex-1 h-px bg-foreground" />
            <div className="w-4 h-4 rounded-full border-2 border-foreground shrink-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
