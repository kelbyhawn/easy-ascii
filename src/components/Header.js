import { HashLink } from "react-router-hash-link";
import Image from "next/image";
import ThemeButton from "./ThemeButton";
import { HEADER_LINKS } from "../data/headerLinks";

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
          loading="eager"
          width={120}
          height={30}
        />
      </HashLink>
      <div className="overlay"></div>
      <div className="wrapper">
        <nav>
          <ul>
            {HEADER_LINKS.map((link) => (
              <li key={link.name}>
                <HashLink smooth to={link.href}>
                  {link.name}
                </HashLink>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeButton theme={theme} onClickTheme={onClickTheme} />
      </div>
    </header>
  );
}
