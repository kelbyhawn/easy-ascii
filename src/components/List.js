export default function List(props) {
  const { category } = props;

  return (
    <>
      <ul className="symbol">
        {category.map(item => (
          <li
            key={item.symbol}
            className="copyable"
            data-clipboard-text={item.symbol}
          >
            <code>{item.symbol}</code>
          </li>
        ))}
      </ul>

      <ul className="word">
        {category.map((item, index) => (
          <li
            key={item.name + index} // "-" repeats; adding index for unique key
            className={item.word !== "-" ? "copyable" : "disabled"}
            data-clipboard-text={item.word}
          >
            <code>{item.word}</code>
          </li>
        ))}
      </ul>

      <ul className="number">
        {category.map(item => (
          <li
            key={item.number}
            className="copyable"
            data-clipboard-text={item.number}
          >
            <code>{item.number}</code>
          </li>
        ))}
      </ul>

      <ul className="name">
        {category.map(item => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </>
  )
}