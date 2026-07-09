export default function ListItem({ subCategory, className, codeTag }) {
  return (
    <li data-clipboard-text={subCategory} className={className}>
      {codeTag ? <code>{subCategory}</code> : `${subCategory}`}
    </li>
  );
}
