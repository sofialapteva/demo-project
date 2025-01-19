import { BugButton } from "app/providers/ErrorBoundary";
import { useTranslation } from "react-i18next";

interface MainPageProps {
  className?: string;
}
const MainPage = ({ className }: MainPageProps) => {
  const { t } = useTranslation();
  return (
    <div className={className}>
      <section>{t("Главная")}</section>
      <BugButton />
    </div>
  );
};

export default MainPage;
