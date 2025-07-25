
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export const buttonGroupVariants = cva(
  "inline-flex items-center overflow-hidden",
  {
    variants: {
      variant: {
        default: "rounded-lg bg-muted border border-border",
        outline: "rounded-lg bg-background border border-border",
        ghost: "rounded-lg",
      },
      size: {
        sm: "text-sm",
        md: "text-sm",
        lg: "text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export const buttonGroupItemVariants = cva(
  "relative inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 border-0",
  {
    variants: {
      variant: {
        default: "text-foreground hover:bg-accent focus-visible:ring-ring",
        outline: "text-foreground hover:bg-accent focus-visible:ring-ring",
        ghost: "text-foreground hover:bg-accent focus-visible:ring-ring",
      },
      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-sm",
        lg: "px-6 py-3 text-base",
      },
      position: {
        first: "",
        middle: "",
        last: "",
        only: "",
      },
      active: {
        true: "bg-blue-600 text-white hover:bg-blue-700",
        false: "bg-transparent",
      },
    },
    compoundVariants: [
      // Default variant position styles - add separators between buttons
      {
        variant: "default",
        position: "first",
        className: "",
      },
      {
        variant: "default",
        position: "middle",
        className: "border-l border-border/50",
      },
      {
        variant: "default",
        position: "last",
        className: "border-l border-border/50",
      },
      {
        variant: "default",
        position: "only",
        className: "",
      },
      // Outline variant position styles - add separators between buttons
      {
        variant: "outline",
        position: "first",
        className: "",
      },
      {
        variant: "outline",
        position: "middle",
        className: "border-l border-border/50",
      },
      {
        variant: "outline",
        position: "last",
        className: "border-l border-border/50",
      },
      {
        variant: "outline",
        position: "only",
        className: "",
      },
      // Ghost variant (no separators needed)
      {
        variant: "ghost",
        position: "first",
        className: "",
      },
      {
        variant: "ghost",
        position: "middle",
        className: "",
      },
      {
        variant: "ghost",
        position: "last",
        className: "",
      },
      {
        variant: "ghost",
        position: "only",
        className: "",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "md",
      position: "middle",
      active: false,
    },
  }
);

/**
 * Individual button item configuration
 */
export interface ButtonGroupItem {
  /**
   * Unique identifier for the button
   */
  id: string;
  /**
   * Text to display in the button
   */
  text: string;
  /**
   * Click handler for the button
   */
  onClick: () => void;
  /**
   * Whether the button is currently active/selected
   * @default false
   */
  active?: boolean;
  /**
   * Whether the button is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * Optional icon to display before the text
   */
  icon?: React.ReactNode;
}

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof buttonGroupVariants> {
  /**
   * Array of button configurations
   */
  items: ButtonGroupItem[];
  /**
   * The visual variant of the button group
   * @default "default"
   */
  variant?: "default" | "outline" | "ghost";
  /**
   * The size of the buttons in the group
   * @default "md"
   */
  size?: "sm" | "md" | "lg";
  /**
  /**
   * Callback when button selection changes
   */
}