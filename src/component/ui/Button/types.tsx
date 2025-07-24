export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The visual variant of the button
   * @default "primary"
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  /**
   * The size of the button
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * The content to display inside the button
   */
  children: React.ReactNode;
  /**
   * Icon to display before the button text
   */
  iconBefore?: React.ReactNode;
  /**
   * Icon to display after the button text
   */
  iconAfter?: React.ReactNode;
  /**
   * Whether the button is in a loading state
   * @default false
   */
  loading?: boolean;
  /**
   * Custom loading icon/spinner
   */
  loadingIcon?: React.ReactNode;
}
