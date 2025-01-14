import { classNames } from "shared/lib/classNames/classNames";
import { NavBar } from "widgets/NavBar";
import { AppRouter } from "./providers/router";
import { useTheme } from "./providers/ThemeProvider";
import "./styles/index.scss";
import { SideBar } from "widgets/SideBar";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <NavBar />
        <div className="content-page">
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
