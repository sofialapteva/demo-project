import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import Button from "shared/ui/Button/Button";
import classes from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
  className?: string;
}
const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const toggle = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };
    return (
        <Button onClick={toggle} className={classNames(classes.LangSwitcher, {}, [className])}>
            {t("Язык")}
        </Button>
    );
};

export default LangSwitcher;
