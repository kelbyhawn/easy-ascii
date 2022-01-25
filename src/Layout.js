// Dependencies
import { useEffect } from "react";
import { HashLink } from "react-router-hash-link";

// Section Components
import Main from "./Main";

export default function Layout() {
  const year = new Date().getFullYear();

  // Toggle light & dark theme
  useEffect(() => {
    const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
    const button = document.querySelector("#btn-theme");

    // Change theme on click
    button.addEventListener("click", () => { 
      if (prefersDarkTheme.matches) {
        document.documentElement.classList.toggle("light");
      } else {
        document.documentElement.classList.toggle("dark");
      }
    })
  }, []);

  return (
    <>
      <header>
        <HashLink smooth to="#top" id="logo" alt="easyASCII logo" />

        <div className="overlay"></div>

        <div className="wrapper">
          <nav>     
            <ul>
              <li>
                <HashLink smooth to="#popular">Popular</HashLink>
              </li>
              <li>
                <HashLink smooth to="#punctuation">Punctuation</HashLink>
              </li>
              <li>
                <HashLink smooth to="#accent">Accented Characters</HashLink>
              </li>
              <li>
                <HashLink smooth to="#greek">Greek</HashLink>
              </li>
              <li>
                <HashLink smooth to="#math">Math</HashLink>
              </li>
              <li>
                <HashLink smooth to="#arrows">Arrows</HashLink>
              </li>
              <li>
                <HashLink smooth to="#fun">Fun</HashLink>
              </li>
            </ul>
          </nav>

          {/* Light & dark mode button */}
          <button id="btn-theme"></button>
        </div>
        
      </header>

      <main>
        <Main />
      </main>

      <footer>
        <p>©{year} easyASCII • Made by <a href="https://kelbyhawn.com" target="_blank" rel="noreferrer">Kelby Hawn</a></p>
      </footer>
    </>
  );
}