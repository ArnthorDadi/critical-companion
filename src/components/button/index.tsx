import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { cn } from "@/utils/utility";

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
export const Button = ({ onClick, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        "rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20",
        className,
      )}
      onClick={onClick}
      {...props}
    />
  );
};
