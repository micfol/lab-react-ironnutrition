import React from "react";
import { useState } from "react";

export const TodaysFoods = ({ selectedFoods }) => {
    
    let total = 0;

    return (
        <>
            <h1>Today's Foods</h1>
            
            {selectedFoods.map((food) => {
                total +=  food.calories * food.quantity;
                return <div>{food.quantity} {food.name} = {food.calories * food.quantity}</div>
            })}
         <p>Total: {total} Calories</p>
        </>
    );
}