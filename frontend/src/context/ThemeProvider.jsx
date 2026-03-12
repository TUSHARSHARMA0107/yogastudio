import { useEffect } from "react";

export default function ThemeProvider({ children }) {

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";

    if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }

  }, []);

  return children;
}