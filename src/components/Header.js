// Components
import Link from "next/link";
import Image from "next/image";
import ThemeButton from "./ThemeButton";

// Assets
import logoLight from "../assets/logo-easyascii-light.svg";
import logoDark from "../assets/logo-easyascii.svg";

// Data
import { HEADER_LINKS } from "../data/headerLinks";

export default function Header({ theme, onClickTheme }) {
  return (
    <header>
      <Link href="#top" id="logo" aria-label="Logo home link">
        <Image
          src={theme === "light" ? logoDark : logoLight}
          alt=""
          loading="eager"
          width={120}
          height={30}
        />
      </Link>
      <div className="overlay"></div>
      <div className="wrapper">
        <nav>
          <ul>
            {HEADER_LINKS.map((link) => (
              <li key={link.name}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeButton theme={theme} onClickTheme={onClickTheme} />
      </div>
    </header>
  );
}
