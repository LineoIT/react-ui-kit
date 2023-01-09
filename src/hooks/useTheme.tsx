import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const current = localStorage.getItem("theme")

export function useTheme() {

  const [theme, setTheme] = useState(( current || "light") as Theme);

  useEffect(() => {
    if(theme == "dark")
      document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, 
  [theme])

  const toggleTheme = (t : Theme) => {
    localStorage.setItem("theme", t);
    setTheme(t)
  };

  return {
    theme,
    toggleTheme,
  };
}
