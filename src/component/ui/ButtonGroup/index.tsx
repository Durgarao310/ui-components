import React, { useCallback } from "react";
import { cn } from "@/lib/utils";
import type { ButtonGroupProps } from "./types";
import { buttonGroupVariants, buttonGroupItemVariants } from "./types";

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  items,
  variant,
  size,
  className,
  ...props
}) => {
  const getPosition = useCallback((index: number, total: number) => {
    if (total === 1) return "only";
    if (index === 0) return "first";
    if (index === total - 1) return "last";
    return "middle";
  }, []);

  return (
    <div
      className={cn(buttonGroupVariants({ variant, size }), className)}
      role="group"
      {...props}
    >
      {items.map((item, index) => {
        const position = getPosition(index, items.length);
        const isActive = !!item.active;

        return (
          <button
            key={item.id}
            type="button"
            disabled={item.disabled}
            onClick={item.onClick}
            className={cn(
              buttonGroupItemVariants({
                variant,
                size,
                position,
                active: isActive,
              })
            )}
            aria-pressed={isActive}
          >
            {item.icon && (
              <span className="mr-2 flex-shrink-0">{item.icon}</span>
            )}
            {item.text}
          </button>
        );
      })}
    </div>
  );
};

export { ButtonGroup };
export type { ButtonGroupProps };
