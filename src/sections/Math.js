import { math, fractions, equality, mathMisc } from "../data/math";
import List from "../components/List";

export default function Math() {
  return (
    <>
      <section id="math">
        <h1>Math</h1>
        {math &&
          <List category={math} />
        }

        <h3>Fractions</h3>
        {fractions &&
          <List category={fractions} />
        }

        <h3>Equality / Inequality</h3>
        {equality &&
          <List category={equality} />
        }

        <h3>Misc</h3>
        {mathMisc &&
          <List category={mathMisc} />
        }
      </section>
    </>
  )
}