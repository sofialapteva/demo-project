import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import classes from "./AppLink.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}
interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}
const AppLink: FC<AppLinkProps> = ({
  theme = AppLinkTheme.PRIMARY,
  className,
  children,
  ...props
}) => (
  <Link className={classNames(classes.AppLink, {}, [className, classes[theme]])} {...props}>
    {children}
  </Link>
);

export default AppLink;
