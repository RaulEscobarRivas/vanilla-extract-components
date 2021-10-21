export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  initialValue?: string,
  isInvalid?: boolean,
  value?: string,
}

export type InputAddonProps = React.HTMLAttributes<HTMLDivElement>;

export type InputErrorProps = React.HTMLAttributes<HTMLParagraphElement>;

export type InputGroupProps = React.HTMLAttributes<HTMLDivElement>;

export type InputIconProps = React.HTMLAttributes<HTMLSpanElement>;

export interface AutoCompleteProps {
  isInvalid?: boolean,
  onBlur: (event: React.FocusEvent) => void,
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onFocus: (event: React.FocusEvent) => void,
  onSelect: (string) => void,
  options,
  placeholder?: string,
}