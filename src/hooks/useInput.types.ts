export interface InputParams {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  value: string | number,
};

export type InputReturn = [
  string | number,
  (event: React.ChangeEvent<HTMLInputElement>) => void,
];