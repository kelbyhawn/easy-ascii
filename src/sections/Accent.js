import { ACCENT_UPPERCASE, ACCENT_LOWERCASE } from "../data/accent";
import List from "../components/List";

export default function Accent() {
  return (
    <section id="accent">
      <h1>Accented Characters</h1>
      {ACCENT_UPPERCASE && <List category={ACCENT_UPPERCASE} />}

      <h2>Lowercase</h2>
      {ACCENT_LOWERCASE && <List category={ACCENT_LOWERCASE} />}
    </section>
  );
}
