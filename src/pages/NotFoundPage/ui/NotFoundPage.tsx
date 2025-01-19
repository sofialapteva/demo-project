import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import classes from "./NotFoundPage.module.scss";

interface NotFoundPageProps {
  className?: string;
}
const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(classes.NotFoundPage, {}, [className])}>
      {t("Страница не найдена")}
    </div>
  );
};

export default NotFoundPage;
