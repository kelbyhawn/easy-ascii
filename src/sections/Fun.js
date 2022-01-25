import { fun, weather, celestial, cards, chess, music, checks, office, funMisc } from "../data/fun";
import List from "../components/List";

export default function Fun() {
  return (
    <>
      <section id="fun">
        <h1>Fun</h1>
        {fun &&
          <div>
            <List category={fun} /> 
          </div>
        }

        <h3>Weather</h3>
        {weather &&
          <div>
            <List category={weather} />
          </div>
        }

        <h3>Celestial</h3>
        {celestial &&
          <div>
            <List category={celestial} />
          </div>
        }

        <h3>Card Suits</h3>
        {cards &&
          <div>
            <List category={cards} />
          </div>
        }

        <h3>Chess Pieces</h3>
        {chess &&
          <div>
            <List category={chess} />
          </div>
        }

        <h3>Music Notes</h3>
        {music &&
          <div>
            <List category={music} />
          </div>
        }

        <h3>Check Marks</h3>
        {checks &&
          <div>
            <List category={checks} />
          </div>
        }

        <h3>Office</h3>
        {office &&
          <div>
            <List category={office} />
          </div>
        }

        <h3>Misc</h3>
        {funMisc &&
          <div>
            <List category={funMisc} />
          </div>
        }
      </section>
    </>
  )
}