"use client";
import Vector from "@/public/images/Vector.svg";
import { Noto_Sans_Georgian } from "next/font/google";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ReceiveDropdown from "../primitives/ReceiveDropdown";
import { dearFutureMeSchema } from "@/features/lib/dearFutureMe.schema";

const notoSansGeorgian = Noto_Sans_Georgian({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const DearFutureMe = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(dearFutureMeSchema),
  });

  return (
    <section
      className={`${notoSansGeorgian.className}  bg-black mx-auto w-[358px] min-h-[853px] md:w-[680px] md:min-h-[876px] xl:w-[956px] xl:min-h-[1220px]`}
    >
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <input type="hidden" {...register("receiveAt")} />
        <h2 className="text-[#2BCAFF] mx-auto w-[225px] text-center text-[24px] font-semibold leading-[130%] md:w-full xl:text-[32px]">
          Dear Future Me...
        </h2>
        <ReceiveDropdown error={errors.receiveAt?.message} />
        <div className="mt-[20px]  flex flex-col gap-[20px] xl:flex-row xl:gap-[24px]">
          <div className="flex flex-col gap-[2px] xl:w-[466px]">
            <label
              htmlFor="firstName"
              className=" text-[10px] xl:text-[18px] leading-[16px] mb-[4px] text-[#FFFFFF]"
            >
              First name <span className="xl:text-[#FF3B30]">*</span>
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="First name"
              {...register("firstName")}
              className={`h-[51px] w-full rounded-[8px] border bg-[#111817] pl-[10px] text-[12px] leading-[20px] text-white xl:h-[59px] xl:pl-[16px] xl:text-[18px] ${
                errors.firstName
                  ? "border-[#FF3B30] placeholder:text-[#FF3B30]"
                  : "border-[#343434] placeholder:text-[#B3B3B3]"
              }`}
            />

            {errors.firstName && (
              <p className="mt-[4px] text-[10px] leading-[14px] text-[#FF3B30]">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-[2px] xl:w-[466px]">
            <label
              htmlFor="lastName"
              className="text-[10px] xl:text-[16px] leading-[16px] xl:mb-[4px] text-[#FFFFFF]"
            >
              Last name<span className="xl:text-[#FF3B30]">*</span>
            </label>

            <input
              id="lastName"
              type="text"
              placeholder="Last name"
              {...register("lastName")}
              className={`h-[51px] w-full rounded-[8px] border bg-[#111817] pl-[10px] xl:pl-[16px] text-[12px] xl:text-[18px] leading-[20px] text-white xl:h-[59px] ${
                errors.lastName
                  ? "border-[#FF3B30] placeholder:text-[#FF3B30]"
                  : "border-[#343434] placeholder:text-[#B3B3B3]"
              }`}
            />

            {errors.lastName && (
              <p className="mt-[4px] text-[10px] leading-[14px] text-[#FF3B30]">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>
        ..............
        <div className="flex flex-col xl:text-[16px] gap-[20px]  ">
          {/* Title */}
          <div className="flex flex-col gap-[2px] ">
            <label
              htmlFor="title"
              className="text-[10px]  leading-[16px] xl:text-[16px] mb-[4px] text-white"
            >
              Title <span className="xl:text-[#FF3B30]">*</span>
            </label>
            <input
              id="title"
              type="text"
              placeholder="Title of your letter"
              {...register("title")}
              className={`h-[51px] w-full rounded-[8px] border bg-[#111817] pl-[10px] text-[12px] leading-[20px] text-white xl:h-[59px] xl:pl-[16px] xl:text-[18px] ${
                errors.title
                  ? "border-[#FF3B30] placeholder:text-[#FF3B30]"
                  : "border-[#343434] placeholder:text-[#B3B3B3]"
              }`}
            />

            {errors.title && (
              <p className="mt-[4px] text-[10px] leading-[14px] text-[#FF3B30]">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="flex flex-col gap-[2px]">
            <label
              htmlFor="message"
              className="text-[10px] xl:text-[16px] leading-[16px] mb-[4px] text-white"
            >
              Message to your future self{" "}
              <span className="xl:text-[#FF3B30]">*</span>
            </label>
            <textarea
              id="message"
              placeholder="Write your letter here"
              {...register("message")}
              className={`h-[264px] w-full resize-none rounded-[8px] border bg-[#111817] p-[10px] text-[12px] leading-[20px] text-white xl:p-[16px] xl:text-[18px] ${
                errors.message
                  ? "border-[#FF3B30] placeholder:text-[#FF3B30]"
                  : "border-[#343434] placeholder:text-[#B3B3B3]"
              }`}
            />

            {errors.message && (
              <p className="mt-[4px] text-[10px] leading-[14px] text-[#FF3B30]">
                {errors.message.message}
              </p>
            )}
          </div>
          <div className="mt-[6px]  flex items-center gap-[6px]">
            <input
              id="terms"
              type="checkbox"
              {...register("terms")}
              className={`h-[14px] w-[14px] shrink-0 cursor-pointer rounded-[2px] border bg-transparent accent-[#00C8FF] ${
                errors.terms ? "border-[#FF3B30]" : "border-[#B3B3B3]"
              }`}
            />

            {errors.terms && (
              <p className="mt-[4px] text-[10px] leading-[14px] text-[#FF3B30]">
                {errors.terms.message}
              </p>
            )}

            <label
              htmlFor="terms"
              className="text-[10px] xl:text-[16px] font-normal leading-[14px] text-white"
            >
              I agree to the{" "}
              <a
                href="#"
                className="text-[#00C8FF] underline-offset-2 hover:underline"
              >
                Privacy policy
              </a>{" "}
              and the{" "}
              <a
                href="#"
                className="text-[#00C8FF] underline-offset-2 hover:underline"
              >
                terms and conditions
              </a>
            </label>
          </div>
        </div>
        <div className="mt-[24px] flex justify-center xl:mt-[64px]">
          <button
            type="submit"
            className="
      flex
      h-[51px]
      w-[358px]
      items-center
      justify-center
      rounded-[100px]
      bg-gradient-to-b
      from-[#7B7B7B]
      to-[#626262]
      text-[16px]
      font-semibold
      leading-[24px]
      text-white
      transition-all
      duration-300
cursor-pointer
      hover:from-[#008BFF]
      hover:to-[#77C0FF]
      hover:shadow-[0_0_12px_rgba(255,255,255,0.35),0_0_36px_rgba(0,139,255,0.65)]

      md:w-[480px]
      xl:h-[72px]
      xl:w-[480px]
    "
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default DearFutureMe;
