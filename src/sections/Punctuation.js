import { punctuation, spaces, dashes, quotes } from "../data/punctuation";
import List from "../components/List";

export default function Punctuation() {
  return (
    <>
      <section id="punctuation">
        <h1>Punctuation</h1>
        {punctuation &&
          <div>
            <List category={punctuation} /> 
          </div>
        }

        <h3>Spaces</h3>
        {spaces &&
          <div>
            <List category={spaces} />
          </div>
        }

        <h3>Dashes</h3>
        {dashes &&
          <div>
            <List category={dashes} />
          </div>
        }

        <h3>Quotes</h3>
        {quotes &&
          <div>
            <List category={quotes} />
          </div>
        }
      </section>
    </>
  )
}