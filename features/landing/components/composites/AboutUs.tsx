const AboutUs = () => {
  return (
    <section
      id="aboutUs"
      aria-labelledby="about-us"
      className="mx-[16px] my-[48px] md:mx-[119px] md:my-[56px] lg:mx-[242px] lg:my-[80px] flex justify-center items-center"
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
            ჩვენ შესახებ
          </h2>
          <p className="text-[12px] lg:text-[18px] leading-[20px] lg:leading-[27px]">
            წარმოიდგინე, რომ შეგიძლია საკუთარ თავს დროში ამანათი გაუგზავნო —
            ზუსტად ამას აკეთებს ილიაუნისა და უნილაბის კიბერხომალდის ერთობლივი
            პროექტი, რომელმაც 2025 წლიდან უკვე ასეულობით სტუდენტის ემოცია
            გააერთიანა. პირველკურსელები თავიანთ იმედებს გამოსაშვებ საღამომდე
            „აარქივებენ“, კურსდამთავრებულები კი 5-წლიან გზავნილს მომავალში
            უშვებენ; ჩვენი პლატფორმა კი ზრუნავს, რომ ეს ციფრული ნოსტალგია
            ავტომატურად, დათქმულ დროსა და წამს მივიდეს ადრესატის ელ-ფოსტაზე. ეს
            არის შანსი, დაუკავშირდე შენს მომავალ ვერსიას და შეახსენო მას ის
            მთავარი მიზნები, რომლებითაც დღეს თვალები გიბრწყინავს.
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
