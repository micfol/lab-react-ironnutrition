import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foodsJSON from './foods.json';
import { FoodBox } from './components/FoodBox';
import { useState } from "react";
import { FoodForm } from './components/FoodForm';
import { FoodSearch } from './components/FoodSearch';
import { TodaysFoods } from './components/TodaysFoods';


function App() {

  const [foods, setFoods] = useState(foodsJSON);
  const [foodsData] = useState(foodsJSON);

  const filterFoods = (keyword) => {
    setFoods(foodsData.filter(food => food.name.toLowerCase().includes(keyword.toLowerCase())))
  };
  
  const addFoodHandler = (newFoodEntry) => {
    setFoods([...foods, newFoodEntry]);
  };

  return (
    <div style={{ display: "inline-flex"}} className="App">
      <div>
        <FoodSearch filterFoods={filterFoods}  />
        {foods.map((food, index) => {
          return <FoodBox key={index} food={food} />
        })}

        <FoodForm addFoodHandler={addFoodHandler} />
      </div>
      <div>
        <TodaysFoods />
      </div>
    </div>
  );
}

export default App;