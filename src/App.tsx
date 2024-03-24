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
import FormWithFormHook from "./components/FormWithFormHook";
import FormValidateWithZod from "./components/FormValidateWithZod";
import AddExpense from "./expense-tracker/components/AddExpense";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/ExpenseFilter";
function App() {
  const cities = ["Pune", "Mumbai", "Hyderabad", "Latur"];
  const handleSelectItem = (item: string) => console.log(item);
  const [products, setProducts] = useState([
    "product1",
    "product2",
    "product3",
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, updateExpenses] = useState([
    { id: 1, description: "Milk", amount: 30, category: "groceries" },
    { id: 2, description: "Movie", amount: 50, category: "entartainment" },
    { id: 3, description: "Electricity", amount: 60, category: "utilities" },
    { id: 4, description: "Clothes", amount: 70, category: "utilities" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div>
        <h4>Expense Tracker</h4>
        <div className="mb-3">
          <AddExpense
            onAddExpense={(data) =>
              updateExpenses([
                ...expenses,
                {
                  ...data,
                  id: expenses.length + 1,
                },
              ])
            }
          />
        </div>
        <div className="mb-3">
          <ExpenseFilter
            onSelectCategory={(category) => setSelectedCategory(category)}
          />
        </div>
        <ExpenseList
          expenses={visibleExpenses}
          onDelete={(id) =>
            updateExpenses(expenses.filter((expense) => expense.id !== id))
          }
        />
        {/* <AddExpense /> */}
      </div>
      {/* <ListGroup
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
        <h4>Form creation</h4>
        <Form />
        <h4>form using useState</h4>
        <FormWithStateHook />
        <h4>form using useForm hook</h4>
        <FormWithFormHook />
        <h4>form using Zod Validation</h4>
        <FormValidateWithZod />
      </div> */}
    </div>
  );
}

export default App;
