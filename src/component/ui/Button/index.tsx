import React from "react";
import { cn } from "@/lib/utils";
import type { ButtonProps } from "./types";

// Default loading spinner component
const LoadingSpinner: React.FC<{ size: 'sm' | 'md' | 'lg' }> = ({ size }) => {
  const sizeClasses = {
    sm: "w-3 h-3",
    md: "w-4 h-4", 
    lg: "w-5 h-5"
  };

  return (
    <svg 
      className={cn("animate-spin", sizeClasses[size])} 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24"
    >
      <circle 
        className="opacity-25" 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="4"
      />
      <path 
        className="opacity-75" 
        fill="currentColor" 
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  iconBefore,
  iconAfter,
  loading = false,
  loadingIcon,
  disabled,
  className,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const variantClasses = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring",
    secondary:
      "bg-secondary text-secondary-foreground hover:bg-secondary/90 focus-visible:ring-ring",
    outline:
      "border border-border bg-background hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring",
    ghost: "hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring",
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm gap-1.5",
    md: "px-4 py-2 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-2.5",
  };

  // Determine if button should be disabled
  const isDisabled = disabled || loading;

  // Choose the loading icon
  const currentLoadingIcon = loadingIcon || <LoadingSpinner size={size} />;

  return (
    <button 
      className={cn(
        baseClasses, 
        variantClasses[variant], 
        sizeClasses[size], 
        className
      )} 
      disabled={isDisabled}
      {...props}
    >
      {/* Loading icon or iconBefore */}
      {loading ? (
        currentLoadingIcon
      ) : iconBefore ? (
        <span className="flex-shrink-0">
          {iconBefore}
        </span>
      ) : null}
      
      {/* Button content */}
      <span className={cn(loading && "opacity-0")}>
        {children}
      </span>
      
      {/* iconAfter (only show if not loading) */}
      {!loading && iconAfter && (
        <span className="flex-shrink-0">
          {iconAfter}
        </span>
      )}
    </button>
  );
};

export { Button };
export type { ButtonProps };
