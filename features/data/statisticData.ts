import { StatisticsProps } from "../types/statistic.types";
import RightArrowLetter from "../src/assets/icons/statisticIcons/RightArrowLetter.svg";
import ClockLetter from "../src/assets/icons/statisticIcons/ClockLetter.svg";
import arrowDownLetter from "../src/assets/icons/statisticIcons/arrowDownLetter.svg";
import Clock from "../src/assets/icons/statisticIcons/Clock.svg";
import RightArrow from "../src/assets/icons/statisticIcons/RightArrow.svg";
import DownArrow from "../src/assets/icons/statisticIcons/DownArrow.svg";
import EclipseBlue from "../src/assets/icons/statisticIcons/EclipseBlue.svg";
import EclipseRed from "../src/assets/icons/statisticIcons/EclipseRed.svg";

export const statisticsData: StatisticsProps[] = [
  {
    id: 1,
    title: "Received",
    count: 200,
    icon: RightArrowLetter,
    width: 70,
    height: 51,
    item: RightArrow,
    itemWith: 27.6,
    itemHeight: 21.7,
    glowClass: "stat-blue",
    itemClass:
      "absolute left-[120.15px] top-[90px] -translate-x-1/2 -translate-y-1/2 ",
    ellipse: EclipseBlue,
  },

  {
    id: 2,
    title: "Pending",
    count: 200,
    icon: ClockLetter,
    width: 70,
    height: 51,
    item: Clock,
    itemWith: 38,
    itemHeight: 37,
    glowClass: "stat-red",
    itemClass: "absolute left-[96.32px] top-[43px]",
    ellipse: EclipseRed,
  },
  {
    id: 3,
    title: "Sent",
    count: 0,
    icon: arrowDownLetter,
    width: 70,
    item: DownArrow,
    height: 51,
    itemWith: 27.6,
    itemHeight: 21.7,
    itemClass:
      "absolute left-[82px] top-[63px] -translate-x-1/2 -translate-y-1/2",
    glowClass: "stat-blue",
    ellipse: EclipseBlue,
  },
];

// [filter:drop-shadow(0_0_2px_#0DA2FF)_drop-shadow(0_0_30px_#0DA2FF)_drop-shadow(0_0_50px_#0DA2FF)_drop-shadow(0_0_1px_#0DA2FF)]
