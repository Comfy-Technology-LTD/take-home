import React, { ComponentProps } from "react";
import { Link, useLocation } from "react-router-dom";
import { useHexes } from "../../../lib/shared/hooks/useHexes";
import { Spinner } from "../../shared/Spinner";

export type CardDetailsType = Readonly<{
  title: React.ReactNode;
  Icon: React.ReactNode;
  figure: number;
  unit: React.ReactNode;
  figureDetails: React.ReactNode;
}>;

export type InsightCardProps = {
  cardDetails: CardDetailsType;
  to?: string;
  toFormat?: boolean;
  isLoading?: boolean;
  statusColor: string;
} & ComponentProps<"div">;

export const InsightCard = ({
  to,
  cardDetails,
  isLoading,
  statusColor,
  toFormat = false,
}: InsightCardProps) => {
  const { pathname } = useLocation();

  const { addLightOpacity, addDeepOpacity } = useHexes();

  const formatter = new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: !toFormat ? undefined : 2,
    maximumFractionDigits: !toFormat ? undefined : 2,
  });

  return (
    <Link
      to={to || pathname}
      className={
        "flex flex-col gap-2.5 items-center min-w-[250px] w-fit h-fit no-underline border border-gray p-5 rounded-lg border-solid  md:gap-3 md:min-w-[160px] md:w-fit md:h-fit md:flex-1 md:p-[15px]"
      }
    >
      <div className={"w-full flex justify-between items-center"}>
        <span
          className={
            "text-[color:var(--okw-dark-text-color1)] font-semibold text-[length:var(--okw-font-size-16)] [text-wrap:wrap]"
          }
        >
          {cardDetails.title}
        </span>
        <span
          style={{
            // border: `1px solid ${AddMidOpacity(statusColor)}`,
            backgroundColor: addLightOpacity(statusColor),
            color: addDeepOpacity(statusColor),
          }}
          className={
            "text-[length:var(--okw-font-size-24)] w-[30px] min-w-[30px] h-[30px] flex items-center justify-center bg-[rgb(239,239,239)] rounded-rd"
          }
        >
          {cardDetails.Icon}
        </span>
      </div>
      <div className={"flex flex-col gap-[3px] w-full"}>
        <span className={"deepTextColor font-bold text-[calc(var(--okw-font-size-14)_*_1.9)]"}>
          {isLoading ? <Spinner /> : `${cardDetails.unit} ${formatter.format(cardDetails.figure)}`}
        </span>
        <span className={"lightTextColor font-normal text-[calc(var(--okw-font-size-12))] [text-wrap:wrap]"}>
          {cardDetails.figureDetails}
        </span>
      </div>
    </Link>
  );
};
