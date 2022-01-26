import { arrows, hands } from "../data/arrows";
import List from "../components/List";

export default function Arrows() {
  return (
    <>
      <section id="arrows">
        <h1>Arrows</h1>
        {arrows &&
          <div>
            <List category={arrows} /> 
          </div>
        }

        <h3>Hands</h3>
        {hands &&
          <div>
            <List category={hands} />
          </div>
        }
      </section>
    </>
  )
}