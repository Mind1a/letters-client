import { termsAndConditionsData } from "../data/terms-and-conditions.data";

const TermsAndConditionsPage = () => {
  return (
    <section className=" bg-foreground min-h-dvh pt-20 pb-20 ">
      {/* Top line */}
      <div className="max-w-170 pl-8 pr-8 md:max-w-239  mx-auto">
        <div
          aria-hidden="true"
          className="flex justify-end items-center mb-6.5 md:mb-9.5"
        >
          <div className="w-[50%] md:w-[40%] lg:w-[60%]  flex items-center">
            <div className="w-4 h-4 rounded-full border-2 border-white shrink-0" />
            <div className="flex-1 h-px bg-white" />
          </div>
        </div>
        {/* end of Top line */}
        <div className=" mt-8">
          <h1 className="text-[#2BCAFF] text-[24px] md:text-[32px] text-center">
            წესები და პირობები
          </h1>
          {termsAndConditionsData.map((terms) => (
            <div
              key={terms.id}
              className="text text-background max-w-239 flex flex-col mx-auto mt-8"
            >
              <h3 className="mb-4.5 text-[14px] md:text-[20px]">
                {terms.title}
              </h3>
              <ul className="space-y-3.75 text-[12px] md:text-[18px] list-disc pl-7">
                {terms.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* bottom line */}
        <div
          aria-hidden="true"
          className="flex justify-start items-center mt-6 md:mt-10 "
        >
          <div className="w-[50%] md:w-[40%] lg:w-[60%]  flex items-center">
            <div className="flex-1 h-px bg-white" />
            <div className="w-4 h-4 rounded-full border-2 border-white shrink-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditionsPage;
