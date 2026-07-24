// Dependencies
import { useEffect, useState } from "react";
import ClipboardJS from "clipboard";

// Components
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";

export default function Container() {
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

  // Click to copy
  useEffect(() => {
    const items = document.querySelectorAll("li.copyable");
    const clipboard = new ClipboardJS(items);

    clipboard.on("success", (e) => {
      // add tooltip
      e.trigger.insertAdjacentHTML(
        "beforeend",
        `<span class="tooltip">Copied!</span>`,
      );
      //debugger // use when working on tooltip css
      // hide tooltip after 2 seconds
      setTimeout(
        () =>
          document
            .querySelectorAll(".tooltip")
            .forEach((tooltip) => tooltip.remove()),
        2000,
      );

      e.clearSelection();
    });

    clipboard.on("error", (e) => console.error(e));
  }, []);

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
