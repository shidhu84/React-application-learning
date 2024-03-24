import React, { useState } from "react";
interface Props {
  children: string;
  maxChars?: number;
}

function ExpandableText({ children, maxChars = 100 }: Props) {
  const [isExpnded, setIsExpanded] = useState(false);
  if (children.length <= maxChars) return <p>children</p>;
  const text = isExpnded ? children : children.substring(0, maxChars);
  return (
    <div>
      {text}...
      <button onClick={() => setIsExpanded(!isExpnded)}>
        {isExpnded ? "Less" : "More"}
      </button>
    </div>
  );
}

export default ExpandableText;
