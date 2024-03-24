import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import AlertButton from "./components/AlertButton";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import StateModification from "./components/StateModification";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";
import FormWithStateHook from "./components/FormWithStateHook";

function App() {
  const cities = ["Pune", "Mumbai", "Hyderabad", "Latur"];
  const handleSelectItem = (item: string) => console.log(item);
  const [products, setProducts] = useState([
    "product1",
    "product2",
    "product3",
  ]);
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
        <NavBar productCartCount={products.length} />
        <ProductList
          products={products}
          onClearCart={() => {
            setProducts([]);
          }}
        />
        <div>
          <ExpandableText maxChars={20}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
            cumque natus sint molestias mollitia, sequi illum doloremque libero
            quam? Placeat repellat nam aliquid ea expedita quod iusto doloribus
            ipsa dolore architecto rerum veritatis, minima fugiat magni quas est
            dolor. Sint nihil facilis ab aliquam, accusantium aut facere aperiam
            dolores veritatis laudantium quos iure nulla voluptatibus similique
            nemo alias, reiciendis quia quam ullam inventore consequatur magni
            numquam? Quo, aliquam ab labore corporis laboriosam ducimus sapiente
            iure, dignissimos architecto, minus beatae! Deserunt iusto tenetur
            earum aspernatur quod perspiciatis doloribus obcaecati vero
            recusandae nulla veritatis numquam, quia aperiam labore repellat
            quaerat odit exercitationem.
          </ExpandableText>
        </div>
      </div>
      <div>
        <h1>React Forms</h1>
        <Form />
        <h2>form using useState</h2>
        <FormWithStateHook />
      </div>
    </div>
  );
}

export default App;
