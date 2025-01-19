import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Button, { ThemeButton } from "shared/ui/Button/Button";

const BugButton = () => {
  const { t } = useTranslation();
  const [error, setError] = useState(false);
  const onThrow = () => setError(true);
  useEffect(() => {
    if (error) throw new Error();
  }, [error]);

  return (
    <Button theme={ThemeButton.OUTLINED} onClick={onThrow}>
      {t("throw error")}
    </Button>
  );
};

export default BugButton;
