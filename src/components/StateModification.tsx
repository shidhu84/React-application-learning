import React, { useState } from "react";
import produce from "immer";
function StateModification() {
  const [person, setPerson] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });
  const [pizza, setPizza] = useState({
    name: "Spicy Peperoni",
    topping: ["Mushroom"],
  });
  const [carts, setCart] = useState({
    discount: 1,
    items: [
      {
        id: 1,
        title: "product 1",
        quantity: 1,
      },
      {
        id: 2,
        title: "product 2",
        quantity: 1,
      },
    ],
  });
  const [bugs, setBugs] = useState([
    {
      id: 1,
      title: "product 1",
      fixed: false,
    },
    {
      id: 2,
      title: "product 2",
      fixed: false,
    },
  ]);
  const handleModify = () => {
    setPerson({ ...person, player: { ...person.player, name: "BOB" } });
    setPizza({ ...pizza, topping: [...pizza.topping, "cheese"] });
    setCart({
      ...carts,
      items: carts.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
    // modify only one object from bugs array
    //setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    //trying with immer
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };
  return (
    <>
      {person.player.name}
      {pizza.topping.map((top) => (
        <p>{top}</p>
      ))}
      {bugs.map((bug) => (
        <p>
          {bug.title} - {bug.fixed ? "Fixed" : "New"}
        </p>
      ))}
      <>
        <button onClick={handleModify}>Modify state</button>
      </>
    </>
  );
}

export default StateModification;
