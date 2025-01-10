import type { LinkProps } from "next/link";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { Img } from "@/components/utils/Img";

type TLogo = LinkProps & {
  className?: string;
  href?: string;
  iconClassName?: string;
  height?: number;
  width?: number;
};

export function Logo({
  className,
  href,
  iconClassName,
  height,
  width,
  ...props
}: TLogo) {
  return (
    <Link href={href || "/"} {...props} className={cn("", className)}>
      <Img
        height={height || 32}
        src="/logo.svg"
        width={width || 185}
        alt="logo"
        className={iconClassName}
      />
    </Link>
  );
}
