// Dependencies
import { HashLink } from "react-router-hash-link";

// Section Components
import Main from "./Main";

// Assets
import logo from './assets/logo-easyascii.svg';

export default function Layout() {
  const year = new Date().getFullYear();

  return (
    <>
      <header>
        <HashLink smooth to="#top">
          <img src={logo} alt="Easy ASCII" />
        </HashLink>

        <div className="overlay"></div>

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