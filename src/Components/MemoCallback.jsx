import React, { useCallback, useMemo, useState } from "react";

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

  const filterItems = useMemo(()=>{
         console.log("filter");
         return items.filter(ele=>ele.toLowerCase().includes(search.toLowerCase()))
  },[items,search])

  const handleChange = useCallback((e)=>{
       setSearch(e.target.value)
       console.log("search items");
       
  },[])

  console.log(count)

  return (
    <div>
     <input 
     type="text"
     name="search"
     value={search}
     onChange={handleChange}
     placeholder="Search for category"
     />
      <ul>
        {filterItems.map((ele,index)=>{
            return(
                <div key={index}>
                    <li>{ele}</li>
                </div>
            )
        })}
      </ul>
      <button onClick={()=>{setCount(val=>val+1)}}>Count: {count}</button>
    </div>
  );
};

export default MemoCallback;
