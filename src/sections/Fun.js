import { fun, weather, celestial, cards, chess, music, checks, office, funMisc } from "../data/fun";
import List from "../components/List";

export default function Fun() {
  return (
    <>
      <section id="fun">
        <h1>Fun</h1>
        {fun &&
          <List category={fun} /> 
        }

        <h3>Weather</h3>
        {weather &&
          <List category={weather} />
        }

        <h3>Celestial</h3>
        {celestial &&
          <List category={celestial} /> 
        }

        <h3>Card Suits</h3>
        {cards &&
          <List category={cards} />
        }

        <h3>Chess Pieces</h3>
        {chess &&
          <List category={chess} /> 
        }

        <h3>Music Notes</h3>
        {music &&
          <List category={music} />
        }

        <h3>Check Marks</h3>
        {checks &&
          <List category={checks} />
        }

        <h3>Office</h3>
        {office &&
          <List category={office} />
        }

        <h3>Misc</h3>
        {funMisc &&
          <List category={funMisc} />
        }
      </section>
    </>
  )
}