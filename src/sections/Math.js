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

        <h2>Fractions</h2>
        {fractions &&
          <List category={fractions} />
        }

        <h2>Equality / Inequality</h2>
        {equality &&
          <List category={equality} />
        }

        <h2>Misc</h2>
        {mathMisc &&
          <List category={mathMisc} />
        }
      </section>
    </>
  )
}