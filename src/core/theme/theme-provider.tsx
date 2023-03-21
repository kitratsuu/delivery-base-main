import React from "react";
import { useRelicTheme } from "./theme.hooks";

// import "./packs/t1.css";
// import "./packs/t2.css";

// import "./theme.css";

export const ThemeProvider = (props: { children: React.ReactNode }) => {
  const { preInit } = useRelicTheme();

  React.useEffect(() => {
    const initializer = async () => {
      preInit();
    };
    initializer();
  }, []);

  return (
    <div className="h-full text-sm bg-background text-onBackground">
      {props.children}
    </div>
  );
};
