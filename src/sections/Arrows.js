import { ARROWS, HANDS } from "../data/arrows";
import List from "../components/List";

export default function Arrows() {
  return (
    <section id="arrows">
      <h1>Arrows</h1>
      {ARROWS && <List category={ARROWS} />}

      <h2>Hands</h2>
      {HANDS && <List category={HANDS} />}
    </section>
  );
}
