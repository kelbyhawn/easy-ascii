import { math, fractions, equality, mathMisc } from "../data/math";
import List from "../components/List";

export default function Math() {
  return (
    <>
      <section id="math">
        <h1>Math</h1>
        {math &&
          <div>
            <List category={math} /> 
          </div>
        }

        <h3>Fractions</h3>
        {fractions &&
          <div>
            <List category={fractions} />
          </div>
        }

        <h3>Equality / Inequality</h3>
        {equality &&
          <div>
            <List category={equality} />
          </div>
        }

        <h3>Misc</h3>
        {mathMisc &&
          <div>
            <List category={mathMisc} />
          </div>
        }
      </section>
    </>
  )
}