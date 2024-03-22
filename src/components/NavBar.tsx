import React from "react";

interface Props {
  productCartCount: number;
}

function NavBar({ productCartCount }: Props) {
  return <div>No of Carts: {productCartCount}</div>;
}

export default NavBar;
