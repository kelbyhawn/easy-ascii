// Components
import ListItem from "./ListItem";

type ListProps = {
  category: {
    symbol: string;
    word: string;
    number: string;
    name: string;
  }[];
};

export default function List({ category }: ListProps) {
  return (
    <div>
      <ul className="symbol">
        {category.map((item) => (
          <ListItem
            key={item.symbol}
            subCategory={item.symbol}
            className="copyable"
            codeTag
          />
        ))}
      </ul>

      <ul className="word">
        {category.map((item, index) => (
          <ListItem
            key={item.name + index}
            subCategory={item.word}
            className={item.word === "-" ? "disabled" : "copyable"}
            codeTag
          />
        ))}
      </ul>

      <ul className="number">
        {category.map((item) => (
          <ListItem
            key={item.number}
            subCategory={item.number}
            className="copyable"
            codeTag
          />
        ))}
      </ul>

      <ul className="name">
        {category.map((item) => (
          <ListItem key={item.name} subCategory={item.name} />
        ))}
      </ul>
    </div>
  );
}
