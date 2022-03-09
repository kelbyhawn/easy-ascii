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

        <h2>Copyright Symbols</h2>
        {copyright &&
          <List category={copyright} />
        }

        <h2>Currency</h2>
        {currency &&
          <List category={currency} />
        }
      </section>
    </>
  )
}