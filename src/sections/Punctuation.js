import { PUNCTUATION, SPACES, DASHES, QUOTES } from "../data/punctuation";
import List from "../components/List";

export default function Punctuation() {
  return (
    <section id="punctuation">
      <h1>Punctuation</h1>
      {PUNCTUATION && <List category={PUNCTUATION} />}

      <h2>Spaces</h2>
      {SPACES && <List category={SPACES} />}

      <h2>Dashes</h2>
      {DASHES && <List category={DASHES} />}

      <h2>Quotes</h2>
      {QUOTES && <List category={QUOTES} />}
    </section>
  );
}
