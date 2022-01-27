import { punctuation, spaces, dashes, quotes } from "../data/punctuation";
import List from "../components/List";

export default function Punctuation() {
  return (
    <>
      <section id="punctuation">
        <h1>Punctuation</h1>
        {punctuation &&
          <List category={punctuation} /> 
        }

        <h3>Spaces</h3>
        {spaces &&
          <List category={spaces} />
        }

        <h3>Dashes</h3>
        {dashes &&
          <List category={dashes} />
        }

        <h3>Quotes</h3>
        {quotes &&
          <List category={quotes} />
        }
      </section>
    </>
  )
}