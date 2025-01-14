import { classNames } from "shared/lib/classNames/classNames";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import classes from "./NavBar.module.scss";

interface NavBarProps {
  className?: string;
}
const NavBar = ({ className }: NavBarProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(classes.navbar, {}, [className])}>
            <div className={classes.links}>
                <AppLink to="/" theme={AppLinkTheme.SECONDARY} className={classes.mainLink}>
                    {t("Главная")}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
                    {t("О сайте")}
                </AppLink>
            </div>
        </div>
    );
};
export default NavBar;
