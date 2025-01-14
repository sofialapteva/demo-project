import { useTranslation } from "react-i18next";

interface MainPageProps {
  className?: string;
}
const MainPage = ({ className }: MainPageProps) => {
    const { t } = useTranslation();
    return <div className={className}>{t("Главная")}</div>;
};

export default MainPage;
