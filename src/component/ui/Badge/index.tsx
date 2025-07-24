import React from "react";
import { cn } from "@/lib/utils";
import type { BadgeProps } from "./types";
import { badgeVariants } from "./types";

const Badge: React.FC<BadgeProps> = ({
  variant,
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {children}
    </div>
  );
};

export { Badge };
export type { BadgeProps };
