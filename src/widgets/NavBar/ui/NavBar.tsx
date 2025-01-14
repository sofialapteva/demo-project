import { classNames } from "shared/lib/classNames/classNames";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import classes from "./NavBar.module.scss";
interface NavBarProps {
  className?: string;
}
const NavBar = ({ className }: NavBarProps) => {
  return (
    <div className={classNames(classes.navbar)}>
      <div className={classes.links}>
        <AppLink to={"/"} theme={AppLinkTheme.SECONDARY} className={classes.mainLink}>
          Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
          О сайте
        </AppLink>
      </div>
    </div>
  );
};

export default NavBar;
