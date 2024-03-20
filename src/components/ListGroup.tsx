import { MouseEvent } from "react";
function ListGroup() {
  const cities = ["Pune", "Mumbai", "Hyderabad", "Latur"];
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <div>
      <h1>List</h1>
      <ul className="list-group">
        {cities.length === 0 ? (
          <p>Cities Not found</p>
        ) : (
          cities.map((city) => (
            <li className="list-group-item" onClick={handleClick}>
              {city}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default ListGroup;
