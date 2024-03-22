import "./App.css";
import Alert from "./components/Alert";
import AlertButton from "./components/AlertButton";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import StateModification from "./components/StateModification";

function App() {
  const cities = ["Pune", "Mumbai", "Hyderabad", "Latur"];
  const handleSelectItem = (item: string) => console.log(item);
  return (
    <div>
      <ListGroup
        items={cities}
        heading="cities"
        onSelectItem={handleSelectItem}
      />
      <Alert>Hello World</Alert>
      <Button color="primary" click={() => console.log("submit")}>
        Submit
      </Button>
      <Button color="warning" click={() => console.log("hello")}>
        Hello
      </Button>
      <AlertButton></AlertButton>

      <div>
        <h1>Hooks</h1>
        <StateModification />
      </div>
    </div>
  );
}

export default App;
