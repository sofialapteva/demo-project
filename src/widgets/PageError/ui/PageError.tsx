import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import Button, { ThemeButton } from "shared/ui/Button/Button";
import classes from "./PageError.module.scss";

interface PageErrorProps {
  className?: string;
}
const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(classes.PageError, {}, [className])}>
      <div> {t("Произошла непредвиденная ошибка")}</div>
      <Button onClick={reloadPage} theme={ThemeButton.OUTLINED}>
        {t("Reload the page")}
      </Button>
    </div>
  );
};

export default PageError;
