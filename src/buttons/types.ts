export interface ButtonProps {
  text: string;
  className: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
