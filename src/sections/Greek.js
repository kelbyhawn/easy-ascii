import { GREEK_UPPERCASE, GREEK_LOWERCASE, GREEK_SYMBOLS } from "../data/greek";
import List from "../components/List";

export default function Greek() {
  return (
    <section id="greek">
      <h1>Greek Alphabet</h1>
      {GREEK_UPPERCASE && <List category={GREEK_UPPERCASE} />}

      <h2>Lowercase</h2>
      {GREEK_LOWERCASE && <List category={GREEK_LOWERCASE} />}

      <h2>Symbols</h2>
      {GREEK_SYMBOLS && <List category={GREEK_SYMBOLS} />}
    </section>
  );
}
