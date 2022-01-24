import { popular, copyright, currency } from "../data/popular";
import List from "../components/List";

export default function Popular() {
  return (
    <>
      <section>
        <h1>Popular ASCII</h1>
        {popular &&
          <div>
            <List category={popular} /> 
          </div>
        }

        <h3>Copyright Symbols</h3>
        {copyright &&
          <div>
            <List category={copyright} />
          </div>
        }

        <h3>Currency</h3>
        {currency &&
          <div>
            <List category={currency} />
          </div>
        }
      </section>
    </>
  )
}