export default function List(props) {
  const { category } = props;

  return (
    <>
      <ul className="symbol copyable">
        {category.map(item => (<>
          <li key={item.symbol}><code>{item.symbol}</code></li>
        </>))}
      </ul>
      <ul className="word copyable">
        {category.map((item) => (<>
          <li key={item.word}>
            <code className={item.word === "-" ? "disabled" : ""}>{item.word}</code>
          </li>
        </>))}
      </ul>
      <ul className="number copyable">
        {category.map(item => (<>
          <li key={item.number}><code>{item.number}</code></li>
        </>))}
      </ul>
      <ul className="name">
        {category.map(item => (<>
          <li key={item.name}>{item.name}</li>
        </>))}
      </ul>
    </>
  )
}