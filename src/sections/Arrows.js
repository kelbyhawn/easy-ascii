import { arrows, hands } from "../data/arrows";
import List from "../components/List";

export default function Arrows() {
  return (
    <>
      <section id="arrows">
        <h1>Arrows</h1>
        {arrows &&
          <List category={arrows} /> 
        }

        <h2>Hands</h2>
        {hands &&
          <List category={hands} />
        }
      </section>
    </>
  )
}