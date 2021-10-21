export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: string;
  radius?: "sm" | "md" | "lg" | "xl";
  withHover?: boolean;
}
