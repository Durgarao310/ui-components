import React, { useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import type { ButtonGroupProps, ButtonGroupItem } from "./types";
import { buttonGroupVariants, buttonGroupItemVariants } from "./types";

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  items,
  variant,
  size,
  multiple = false,
  onSelectionChange,
  className,
  ...props
}) => {
  const [activeIds, setActiveIds] = useState<string[]>(
    items.filter(item => item.active).map(item => item.id)
  );

  const getPosition = useCallback((index: number, total: number) => {
    if (total === 1) return "only";
    if (index === 0) return "first";
    if (index === total - 1) return "last";
    return "middle";
  }, []);

  const handleItemClick = useCallback((item: ButtonGroupItem) => {
    if (item.disabled) return;

    let newActiveIds: string[];

    if (multiple) {
      // Multiple selection mode
      if (activeIds.includes(item.id)) {
        newActiveIds = activeIds.filter(id => id !== item.id);
      } else {
        newActiveIds = [...activeIds, item.id];
      }
    } else {
      // Single selection mode
      newActiveIds = activeIds.includes(item.id) ? [] : [item.id];
    }

    setActiveIds(newActiveIds);
    onSelectionChange?.(newActiveIds);
    item.onClick();
  }, [activeIds, multiple, onSelectionChange]);

  return (
    <div 
      className={cn(buttonGroupVariants({ variant, size }), className)} 
      role="group"
      {...props}
    >
      {items.map((item, index) => {
        const position = getPosition(index, items.length);
        const isActive = activeIds.includes(item.id);

        return (
          <button
            key={item.id}
            type="button"
            disabled={item.disabled}
            onClick={() => handleItemClick(item)}
            className={cn(
              buttonGroupItemVariants({ 
                variant, 
                size, 
                position, 
                active: isActive 
              })
            )}
            aria-pressed={isActive}
          >
            {item.icon && (
              <span className="mr-2 flex-shrink-0">
                {item.icon}
              </span>
            )}
            {item.text}
          </button>
        );
      })}
    </div>
  );
};

export { ButtonGroup };
export type { ButtonGroupProps, ButtonGroupItem };
