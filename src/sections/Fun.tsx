import {
  FUN,
  WEATHER,
  CELESTIAL,
  CARDS,
  CHESS,
  MUSIC,
  CHECKS,
  OFFICE,
  FUN_MISC,
} from "../data/fun";
import List from "../components/List";

export default function Fun() {
  return (
    <section id="fun">
      <h1>Fun</h1>
      {FUN && <List category={FUN} />}

      <h2>Weather</h2>
      {WEATHER && <List category={WEATHER} />}

      <h2>Celestial</h2>
      {CELESTIAL && <List category={CELESTIAL} />}

      <h2>Card Suits</h2>
      {CARDS && <List category={CARDS} />}

      <h2>Chess Pieces</h2>
      {CHESS && <List category={CHESS} />}

      <h2>Music Notes</h2>
      {MUSIC && <List category={MUSIC} />}

      <h2>Check Marks</h2>
      {CHECKS && <List category={CHECKS} />}

      <h2>Office</h2>
      {OFFICE && <List category={OFFICE} />}

      <h2>Misc</h2>
      {FUN_MISC && <List category={FUN_MISC} />}
    </section>
  );
}
