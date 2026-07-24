// Dependencies
import { useEffect, useState } from "react";

// Section Components
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";

export default function Layout() {
  // Change theme (light/dark)
  const [theme, setTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
  );

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  function handleThemeChange() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  // Show Back to top button
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 300) setIsScrolling(true);
      else setIsScrolling(false);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleBackToTopClick() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <Header theme={theme} onClickTheme={handleThemeChange} />
      <Main />
      <Footer />
      {isScrolling && (
        <BackToTopButton
          isScrolling={isScrolling}
          onClickBackToTop={handleBackToTopClick}
        />
      )}
    </>
  );
}
