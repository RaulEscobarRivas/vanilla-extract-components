export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: string | React.ComponentType,
};

export interface ButtonCustomProps {
  className?: string,
};

export type ButtonReturn = [
  string | React.ComponentType,
  React.ButtonHTMLAttributes<HTMLButtonElement>,
];