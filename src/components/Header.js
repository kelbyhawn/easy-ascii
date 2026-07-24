import { HashLink } from "react-router-hash-link";
import Image from "next/image";
import ThemeButton from "./ThemeButton";

// Assets
import logoLight from "../assets/logo-easyascii-light.svg";
import logoDark from "../assets/logo-easyascii.svg";

export default function Header({ theme, onClickTheme }) {
  return (
    <header>
      <HashLink smooth to="#top" id="logo" aria-label="easyASCII logo">
        <Image
          src={theme === "light" ? logoDark : logoLight}
          alt="easyASCII logo"
          width={120}
          height={30}
        />
      </HashLink>
      <div className="overlay"></div>
      <div className="wrapper">
        <nav>
          <ul>
            <li>
              <HashLink smooth to="#popular">
                Popular
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#punctuation">
                Punctuation
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#accent">
                Accented Characters
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#greek">
                Greek
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#math">
                Math
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#arrows">
                Arrows
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#fun">
                Fun
              </HashLink>
            </li>
          </ul>
        </nav>
        <ThemeButton theme={theme} onClickTheme={onClickTheme} />
      </div>
    </header>
  );
}
