import React, { useState } from "react";

const MemoCallback = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([
    "Mens",
    "Womens",
    "Kids",
    "Electronics",
    "Fashion",
  ]);
  const [search, setSearch] = useState("");
  return (
    <div>
      <h1>Memoization</h1>
    </div>
  );
};

export default MemoCallback;
