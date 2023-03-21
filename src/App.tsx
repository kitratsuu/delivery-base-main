import "./core/theme/packs/t1.css";
import "./core/theme/packs/t2.css";

import "./core/theme/theme.css";

import { ThemeProvider } from "./core/theme/theme-provider";
import { BrowserRouter } from "react-router-dom";
import { MainRouter } from "./pages/main.router";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}
