import { POPULAR, COPYRIGHT, CURRENCY } from "../data/popular";
import List from "../components/List";

export default function Popular() {
  return (
    <section id="popular">
      <h1>Popular</h1>
      {POPULAR && <List category={POPULAR} />}

      <h2>Copyright Symbols</h2>
      {COPYRIGHT && <List category={COPYRIGHT} />}

      <h2>Currency</h2>
      {CURRENCY && <List category={CURRENCY} />}
    </section>
  );
}
