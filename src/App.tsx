import "./App.css";
import ListGroup from "./components/ListGroup";

function App() {
  const cities = ["Pune", "Mumbai", "Hyderabad", "Latur"];
  const handleSelectItem = (item: string) => console.log(item);
  return (
    <div>
      <ListGroup items={cities} heading="cities" onSelectItem={handleSelectItem}/>
    </div>
  );
}

export default App;
