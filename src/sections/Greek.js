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

        <h2>Lowercase</h2>
        {greekLowercase &&
          <List category={greekLowercase} />
        }

        <h2>Symbols</h2>
        {greekSymbols &&
          <List category={greekSymbols} />
        }
      </section>
    </>
  )
}