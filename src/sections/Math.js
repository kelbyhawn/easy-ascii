import { MATH, FRACTIONS, COMPARISON_OPERATORS, MATH_MISC } from "../data/math";
import List from "../components/List";

export default function Math() {
  return (
    <section id="math">
      <h1>Math</h1>
      {MATH && <List category={MATH} />}

      <h2>Fractions</h2>
      {FRACTIONS && <List category={FRACTIONS} />}

      <h2>Comparison Operators</h2>
      {COMPARISON_OPERATORS && <List category={COMPARISON_OPERATORS} />}

      <h2>Misc</h2>
      {MATH_MISC && <List category={MATH_MISC} />}
    </section>
  );
}
