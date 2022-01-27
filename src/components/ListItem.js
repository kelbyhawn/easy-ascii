export default function ListItem(props) {
  const { subCategory, className, codeTag } = props;

  return (
    <li data-clipboard-text={subCategory} className={className} >
      {codeTag ? <code>{subCategory}</code> : `${subCategory}` }
    </li>
  )
}