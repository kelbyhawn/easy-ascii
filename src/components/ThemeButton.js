// Components
import Image from "next/image";

// Assets
import iconMoon from "../assets/icon-moon.svg";
import iconSun from "../assets/icon-sun.svg";

export default function ThemeButton({ theme, onClickTheme }) {
  return (
    <button aria-label="Change theme" onClick={onClickTheme}>
      <Image
        src={theme === "light" ? iconMoon : iconSun}
        alt=""
        width={14}
        height={14}
      />
    </button>
  );
}
