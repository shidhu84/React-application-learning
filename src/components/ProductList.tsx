import React from "react";

interface Props {
  products: string[],
  onClearCart: () => void
}

function ProductList({ products, onClearCart }: Props) {
  return (
    <>
      <h1>List</h1>
      <ul>
        {products.map((product) => (
          <li key={product}>{product}</li>
        ))}
      </ul>
      <button onClick={onClearCart}>Clear</button>
    </>
  );
}

export default ProductList;
