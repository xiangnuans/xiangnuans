import { cx } from "@/util/all";

export type ColorType = "green" | "blue" | "orange" | "purple" | "pink";

interface Props {
  color: ColorType;
  nomargin: boolean;
  pill?: string;
  children: any;
}

export default function Label({ color, nomargin, pill, children }: Props) {
  const colorMap = {
    green: "text-emerald-700",
    blue: "text-blue-600",
    orange: "text-orange-700",
    purple: "text-purple-600",
    pink: "text-pink-600",
  };
  const bgcolor = {
    green: "bg-emerald-50",
    blue: "bg-blue-50",
    orange: "bg-orange-50",
    purple: "bg-purple-50",
    pink: "bg-pink-50",
  };

  if (pill) {
    return (
      <div
        className={
          "inline-flex items-center justify-center font-bold px-2 h-6 text-sm bg-blue-50 text-blue-500 rounded-full shrink-0 dark:bg-gray-800 dark:text-gray-300"
        }
      >
        {children}
      </div>
    );
  }

  return (
    <span
      className={cx(
        "inline-block text-xs font-medium tracking-wider uppercase ",
        !nomargin && " mt-5",
        colorMap[color] || colorMap["pink"]
      )}
    >
      {children}
    </span>
  );
}
