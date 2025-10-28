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
     <input 
     type="text"
     name="search"
     value={search}
     onChange={handleChange}
     placeholder="Search for category"
     />
      
      <button onClick={()=>{setCount(val=>val+1)}}>Count: {count}</button>
    </div>
  );
};

export default MemoCallback;
