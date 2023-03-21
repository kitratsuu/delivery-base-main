import {
  appColorsDefaults,
  RColorSchemeMode,
  RThemeColors,
  RThemeMode,
} from "./theme.types";

import { getThemeColorsFromCSS, setThemeColorsToCSS } from "./theme.utils";

///
import t1 from "./packs/t1.jpg";
import t2 from "./packs/t2.jpg";
import { atomWithStorage } from "jotai/utils";
///

let appColors: RThemeColors = appColorsDefaults;
export const getAppColors = () => appColors;

export namespace RelicTheme {
  /// Atom

  export const themeAtom = atomWithStorage("relicAppTheme", {
    themeMode: null as RThemeMode | null,
    colorSchemeMode: "md1" as RColorSchemeMode,
  });

  ///

  const allColorsSchemes: RColorSchemeMode[] = ["md1", "md2"];
  export const allImages = [t1, t2];

  let currentThemeMode: RThemeMode = "light";
  let currentColorSchemeMode: RColorSchemeMode = "md1";
  export const getCurrentThemeMode = () => currentThemeMode;
  export const getCurrentColorSchemeMode = () => currentColorSchemeMode;

  ///

  const isSystemDarkMode = () =>
    (window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches) ??
    false;

  export function preInit() {
    // currentThemeMode = isSystemDarkMode() ? "dark" : "light";
    currentThemeMode = "light";
    // Apply
    setThemeMode(currentThemeMode, currentColorSchemeMode);
  }

  const setColorSchemeModeToRoot = (colorSchemeMode: RColorSchemeMode) => {
    const root = document.body;
    allColorsSchemes.forEach((s) => {
      root.classList.remove(s);
    });
    root.classList.add(colorSchemeMode);
  };

  ///

  export function setThemeMode(
    themeMode: RThemeMode,
    colorSchemeMode: RColorSchemeMode
  ) {
    currentThemeMode = themeMode;
    currentColorSchemeMode = colorSchemeMode;
    setColorSchemeModeToRoot(colorSchemeMode);
    setThemeColorsToCSS(themeMode);
    appColors = getThemeColorsFromCSS();
  }

  ///
  export function getThemeImage() {
    return allImages[allColorsSchemes.indexOf(currentColorSchemeMode)];
  }
}
