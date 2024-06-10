import { cx } from "@/util/all";

interface Props {
  large?: string;
  alt?: string;
  className?: string;
  children?: any;
}

export default function Container({ large, alt, className, children }: Props) {
  return (
    <div
      className={cx(
        "container px-8 mx-auto xl:px-5",
        large ? " max-w-screen-xl" : " max-w-screen-lg",
        !alt && "py-5 lg:py-8",
        className
      )}
    >
      {children}
    </div>
  );
}
