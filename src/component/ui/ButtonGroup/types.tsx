
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export const buttonGroupVariants = cva(
  "inline-flex items-center",
  {
    variants: {
      variant: {
        default: "rounded-md shadow-sm",
        outline: "rounded-md",
        ghost: "rounded-md",
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
  "relative inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-background border border-border text-foreground hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring",
        outline: "border border-border text-foreground hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring",
        ghost: "text-foreground hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring",
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
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      // Default variant position styles
      {
        variant: "default",
        position: "first",
        className: "rounded-l-md border-r-0",
      },
      {
        variant: "default",
        position: "middle",
        className: "border-r-0 rounded-none",
      },
      {
        variant: "default",
        position: "last",
        className: "rounded-r-md",
      },
      {
        variant: "default",
        position: "only",
        className: "rounded-md",
      },
      // Outline variant position styles
      {
        variant: "outline",
        position: "first",
        className: "rounded-l-md border-r-0",
      },
      {
        variant: "outline",
        position: "middle",
        className: "border-r-0 rounded-none",
      },
      {
        variant: "outline",
        position: "last",
        className: "rounded-r-md",
      },
      {
        variant: "outline",
        position: "only",
        className: "rounded-md border",
      },
      // Ghost variant (no borders)
      {
        variant: "ghost",
        position: "first",
        className: "rounded-l-md",
      },
      {
        variant: "ghost",
        position: "middle",
        className: "rounded-none",
      },
      {
        variant: "ghost",
        position: "last",
        className: "rounded-r-md",
      },
      {
        variant: "ghost",
        position: "only",
        className: "rounded-md",
      },
      // Active states
      {
        variant: "default",
        active: true,
        className: "bg-primary text-primary-foreground border-primary hover:bg-primary/90",
      },
      {
        variant: "outline",
        active: true,
        className: "bg-primary text-primary-foreground border-primary hover:bg-primary/90",
      },
      {
        variant: "ghost",
        active: true,
        className: "bg-primary text-primary-foreground hover:bg-primary/90",
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
   * Whether multiple buttons can be active at once
   * @default false
   */
  multiple?: boolean;
  /**
   * Callback when button selection changes
   */
  onSelectionChange?: (activeIds: string[]) => void;
}