import { FC, SVGProps } from "react";

export type StatisticsProps = {
  id: number;
  titleKey: string;
  count: number;
  icon: FC<SVGProps<SVGSVGElement>>;
  width: number;
  height: number;
  glowClass: string;
  item: FC<SVGProps<SVGSVGElement>>;
  itemWith: number;
  itemHeight: number;
  itemClass: string;
  ellipse: FC<SVGProps<SVGElement>>;
};

export type StatsProps = {
  count: number;
};
