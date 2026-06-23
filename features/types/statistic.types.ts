import { StaticImageData } from "next/image";

export type StatisticsProps = {
  id: number;
  title: string;
  count: number;
  icon: string;
  width: number;
  height: number;
  glowClass: string;
  item?: string;
  itemWith?: number;
  itemHeight?: number;
  itemClass?: string;
  iconClass?: string;
};

export type StatsProps = {
  count: number;
};
