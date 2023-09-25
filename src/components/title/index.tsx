import { cn } from "@/utils/utility";
import React from "react";

type TitleProps = {
  title: string;
  titleStyle?: string;
  subtitle?: string;
  subtitleStyle?: string;
};
export const Title = ({
  titleStyle,
  subtitleStyle,
  title,
  subtitle,
}: TitleProps) => {
  return (
    <div className={"w-full"}>
      <h1
        className={cn(
          "text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]",
          titleStyle,
        )}
      >
        {title}
      </h1>
      {!!subtitle ? (
        <p
          className={cn(
            "mt-2 border-l-2 border-indigo-500 pl-2 text-sm italic text-gray-400",
            subtitleStyle,
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
};
