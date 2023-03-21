import { useAtom } from "jotai";
import { RelicTheme } from "./theme";
import { RColorSchemeMode, RThemeMode } from "./theme.types";

export const useRelicTheme = () => {
  const [theme, setTheme] = useAtom(RelicTheme.themeAtom);

  const setThemeMode = (mode: RThemeMode) => {
    RelicTheme.setThemeMode(mode, theme.colorSchemeMode);
    setTheme({
      themeMode: mode,
      colorSchemeMode: theme.colorSchemeMode,
    });
  };

  const setColorSchemeMode = (colorScheme: RColorSchemeMode) => {
    RelicTheme.setThemeMode(theme.themeMode!, colorScheme);
    setTheme({
      themeMode: theme.themeMode,
      colorSchemeMode: colorScheme,
    });
  };

  const toggleThemeMode = () => {
    setThemeMode(theme.themeMode === "light" ? "dark" : "light");
  };

  const preInit = () => {
    RelicTheme.preInit();
    if (theme.themeMode == null) {
      setTheme({
        themeMode: RelicTheme.getCurrentThemeMode(),
        colorSchemeMode: RelicTheme.getCurrentColorSchemeMode(),
      });
    } else {
      setThemeMode(theme.themeMode);
    }
  };

  return {
    theme,
    setThemeMode,
    setColorSchemeMode,
    toggleThemeMode,
    preInit,
  };
};
