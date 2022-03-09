import { accentUppercase, accentLowercase } from "../data/accent";
import List from "../components/List";

export default function Accent() {
  return (
    <>
      <section id="accent">
        <h1>Accented Characters</h1>
        {accentUppercase &&
          <List category={accentUppercase} /> 
        }

        <h2>Lowercase</h2>
        {accentLowercase &&
          <List category={accentLowercase} />
        }
      </section>
    </>
  )
}