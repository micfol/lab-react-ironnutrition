import React from "react";
import { useState } from "react";

export const FoodSearch = ({ filterFoods }) => {
   const [keyword, setKeyword] = useState("");

   const handleFilterFood = (e) => {
     setKeyword(e.target.value);
     filterFoods(e.target.value);
   }
    
    return (
        <div className="FoodSearch">
            <label>Search Foods:</label>
            <input onChange={handleFilterFood} value={keyword} type="text" />
        </div>
    );
}