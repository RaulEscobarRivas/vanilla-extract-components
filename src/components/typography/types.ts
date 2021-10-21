interface TypographyProps {
  as?: string;
  shadow?: boolean;
  ellipsis?: boolean;
  color?: string;
  textAlign?: "left" | "right" | "center";
  [x: string]: any;
}

export interface CopyProps extends TypographyProps {
  bold?: boolean;
  extraLight?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export interface HeadingProps extends TypographyProps {
  size?: "superhero" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
