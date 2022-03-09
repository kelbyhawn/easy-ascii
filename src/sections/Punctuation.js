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

        <h2>Spaces</h2>
        {spaces &&
          <List category={spaces} />
        }

        <h2>Dashes</h2>
        {dashes &&
          <List category={dashes} />
        }

        <h2>Quotes</h2>
        {quotes &&
          <List category={quotes} />
        }
      </section>
    </>
  )
}