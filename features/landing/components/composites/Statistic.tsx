import { statisticsData } from "@/features/data/statisticData";
import AnimatedCounter from "../primitives/AnimatedCounter";

const Statistic = () => {
  return (
    <div
      className="bg-background text-foreground  min-h-dvh flex justify-center items-center 
      "
    >
      <div className="text-center">
        <h2 className="text-3xl text-[#2BCAFF] mt-10">Statistics</h2>

        <div className="md:max-w-190 md:min-h-66.5 max-w-43 min-h-196.5 flex flex-col  md:flex-row md:gap-25.75 justify-center items-center gap-12  mt-14 md:mt-16">
          {statisticsData.map((data) => (
            <div
              className="max-w-43 w-full min-h-66.5 flex flex-col items-center"
              key={data.id}
            >
              <div
                className={`relative w-43 h-43 border-4 rounded-full flex justify-center items-center  ${data.glowClass}`}
              >
                {data.ellipse && (
                  <data.ellipse className="absolute w-42 h-43 left-0 top-0 -translate-x-[1.5px] -translate-y-1 rounded-full inset-0 " />
                )}

                <data.icon
                  className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-foreground`}
                />
                {data.item && <data.item className={data.itemClass} />}
              </div>
              <div className="mt-6 space-y-2">
                <p className="text-[24px]">{data.title}</p>

                <AnimatedCounter value={data.count} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistic;
