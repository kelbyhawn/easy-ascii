import { greekUppercase, greekLowercase, greekSymbols } from "../data/greek";
import List from "../components/List";

export default function Greek() {
  return (
    <>
      <section id="greek">
        <h1>Greek Letters & Symbols</h1>
        {greekUppercase &&
          <div>
            <List category={greekUppercase} /> 
          </div>
        }

        <h3>Lowercase</h3>
        {greekLowercase &&
          <div>
            <List category={greekLowercase} />
          </div>
        }

        <h3>Symbols</h3>
        {greekSymbols &&
          <div>
            <List category={greekSymbols} />
          </div>
        }
      </section>
    </>
  )
}