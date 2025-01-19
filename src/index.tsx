import { ErrorBoundary } from "app/providers/ErrorBoundary";
import { ThemeProvider } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "shared/config/i18n/i18n";
import { App } from "./app/App";

render(
  <ErrorBoundary>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </ErrorBoundary>,
  document.getElementById("root")
);
