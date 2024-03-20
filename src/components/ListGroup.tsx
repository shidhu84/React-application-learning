import { MouseEvent, useState } from "react";
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  const handleClick = (event: MouseEvent) => console.log(event);
  const [selectIndex, setSelectIndex] = useState(-1);
  return (
    <div>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.length === 0 ? (
          <p>Cities Not found</p>
        ) : (
          items.map((city, index) => (
            <li
              key={city}
              className={
                selectIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => {
                setSelectIndex(index), onSelectItem(city);
              }}
            >
              {city}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default ListGroup;
