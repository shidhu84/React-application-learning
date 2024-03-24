import React, { useState } from "react";

interface Props {
  onSelectCategory: (category: string) => void;
}

function ExpenseFilter({ onSelectCategory }: Props) {
  const [category, setCategory] = useState("");
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value="">Select Category</option>
      <option value="groceries">Groceries</option>
      <option value="utilities">Utilities</option>
      <option value="entartainment">Entertainment</option>
    </select>
  );
}

export default ExpenseFilter;
