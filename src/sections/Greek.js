import { greekUppercase, greekLowercase, greekSymbols } from "../data/greek";
import List from "../components/List";

export default function Greek() {
  return (
    <>
      <section id="greek">
        <h1>Greek Letters & Symbols</h1>
        {greekUppercase &&
          <List category={greekUppercase} />
        }

        <h3>Lowercase</h3>
        {greekLowercase &&
          <List category={greekLowercase} />
        }

        <h3>Symbols</h3>
        {greekSymbols &&
          <List category={greekSymbols} />
        }
      </section>
    </>
  )
}