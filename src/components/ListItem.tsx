type ListItemProps = {
  subCategory: string;
  className?: string;
  codeTag?: boolean;
};

export default function ListItem({
  subCategory,
  className,
  codeTag,
}: ListItemProps) {
  return (
    <li data-clipboard-text={subCategory} className={className}>
      {codeTag ? <code>{subCategory}</code> : `${subCategory}`}
    </li>
  );
}
