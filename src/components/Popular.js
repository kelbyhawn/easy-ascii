import { popular, copyright, currency } from "../assets/data";

export default function Popular() {
  return (
    <>
      <section>
        <h1>Popular ASCII</h1>
        {popular &&
          <div>
            <ul className="symbol copyable">
              {popular.map(item => (
                <li key={item.symbol}><code>{item.symbol}</code></li>
              ))}
            </ul>

            <ul className="word copyable">
              {popular.map(item => (
                <li key={item.word}><code>{item.word}</code></li>
              ))}
            </ul>

            <ul className="number copyable">
              {popular.map(item => (
                <li key={item.number}><code>{item.number}</code></li>
              ))}
            </ul>

            <ul className="name">
              {popular.map(item => (
                <li key={item.name}>{item.name}</li>
              ))}
            </ul>
          </div>
        }

        <h3>Copyright Symbols</h3>
        {copyright &&
          <div>
            <ul className="symbol copyable">
              {copyright.map(item => (
                <li key={item.symbol}><code>{item.symbol}</code></li>
              ))}
            </ul>

            <ul className="word copyable">
              {copyright.map(item => (
                <li key={item.word}><code>{item.word}</code></li>
              ))}
            </ul>

            <ul className="number copyable">
              {copyright.map(item => (
                <li key={item.number}><code>{item.number}</code></li>
              ))}
            </ul>

            <ul className="name">
              {copyright.map(item => (
                <li key={item.name}>{item.name}</li>
              ))}
            </ul>
          </div>
        }

        <h3>Currency</h3>
        {currency &&
          <div>
            <ul className="symbol copyable">
              {currency.map(item => (
                <li key={item.symbol}><code>{item.symbol}</code></li>
              ))}
            </ul>

            <ul className="word copyable">
              {currency.map(item => (
                <li key={item.word}><code>{item.word}</code></li>
              ))}
            </ul>

            <ul className="number copyable">
              {currency.map(item => (
                <li key={item.number}><code>{item.number}</code></li>
              ))}
            </ul>

            <ul className="name">
              {currency.map(item => (
                <li key={item.name}>{item.name}</li>
              ))}
            </ul>
          </div>
        }
      </section>
    </>
  )
}