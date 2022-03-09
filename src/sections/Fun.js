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

        <h2>Weather</h2>
        {weather &&
          <List category={weather} />
        }

        <h2>Celestial</h2>
        {celestial &&
          <List category={celestial} /> 
        }

        <h2>Card Suits</h2>
        {cards &&
          <List category={cards} />
        }

        <h2>Chess Pieces</h2>
        {chess &&
          <List category={chess} /> 
        }

        <h2>Music Notes</h2>
        {music &&
          <List category={music} />
        }

        <h2>Check Marks</h2>
        {checks &&
          <List category={checks} />
        }

        <h2>Office</h2>
        {office &&
          <List category={office} />
        }

        <h2>Misc</h2>
        {funMisc &&
          <List category={funMisc} />
        }
      </section>
    </>
  )
}