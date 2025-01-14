import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import classes from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}
const Button: FC<ButtonProps> = ({ className, children, theme = ThemeButton.CLEAR, ...props }) => {
  return (
    <button className={classNames(classes.Button, {}, [className, classes[theme]])} {...props}>
      {children}
    </button>
  );
};

export default Button;
