import { StatisticsProps } from "../types/statistic.types";

export const statisticsData: StatisticsProps[] = [
  {
    id: 1,
    title: "Received",
    count: 200,
    icon: "/icons/statisticIcons/RightArrowLetter.svg",
    width: 70,
    height: 51,
    item: "/icons/statisticIcons/RightArrow.svg",
    itemWith: 27.6,
    itemHeight: 21.7,
    glowClass:
      "shadow-[0_0_0.14px_#2BCAFF,0_0_10.28px_#2BCAFF,0_0_10.96px_#2BCAFF]",
    itemClass:
      "absolute left-[120.15px] top-[90px] -translate-x-1/2 -translate-y-1/2 [filter:drop-shadow(0_0_2px_#0DA2FF)_drop-shadow(0_0_30px_#0DA2FF)_drop-shadow(0_0_50px_#0DA2FF)_drop-shadow(0_0_1px_#0DA2FF)]",
  },
  {
    id: 2,
    title: "Pending",
    count: 200,
    icon: "/icons/statisticIcons/ClockLetter.svg",
    width: 70,
    height: 51,
    item: "/icons/statisticIcons/Clock.svg",
    itemWith: 38,
    itemHeight: 37,
    glowClass:
      "shadow-[0_0_10.14px_#C52C34,0_0_20.28px_#C52C34,0_0_10.96px_#C52C34,0_0_0.93px_#C52C34]",
    itemClass: "absolute left-[96.32px] top-[43px]",
  },
  {
    id: 3,
    title: "Sent",
    count: 0,
    icon: "/icons/statisticIcons/arrowDownLetter.svg",
    width: 70,
    height: 51,
    glowClass:
      "shadow-[0_0_0.14px_#2BCAFF,0_0_20.28px_#2BCAFF,0_0_10.96px_#2BCAFF]",
    iconClass: "pb-[18px]",
  },
];
