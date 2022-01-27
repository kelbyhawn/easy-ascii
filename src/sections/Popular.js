import { popular, copyright, currency } from "../data/popular";
import List from "../components/List";

export default function Popular() {
  return (
    <>
      <section id="popular">
        <h1>Popular ASCII</h1>
        {popular &&
          <List category={popular} />
        }

        <h3>Copyright Symbols</h3>
        {copyright &&
          <List category={copyright} />
        }

        <h3>Currency</h3>
        {currency &&
          <List category={currency} />
        }
      </section>
    </>
  )
}