import React from 'react';
import { useState } from 'react';

export const FoodBox = ({ food, setSelectedFoods, selectedFoods }) => {

    const [quantity, setQuantity] = useState(food.quantity);

    const handleSelectedFood = () => {
        let selectedFood = food;
        selectedFood.quantity = quantity; 
        setSelectedFoods([...selectedFoods, selectedFood]);
    }

    return (
        <div class="columns">
            <div class="column">
                <div className="box">
                    <article className="media">
                        <div className="media-left">
                            <figure className="image is-64x64">
                                <img src={food.image} alt="foodPic" />
                            </figure>
                        </div>
                        <div className="media-content">
                            <div className="content">
                                <p>
                                <strong>{food.name}</strong> <br />
                                <small>{food.calories}</small>
                                </p>
                            </div>
                        </div>
                        <div className="media-right">
                            <div className="field has-addons">
                                <div className="control">
                                    <input onChange={(e) => setQuantity(e.target.value)} className="input" type="number" value={quantity} />
                                </div>
                                <div className="control">
                                     <button onClick={()=> handleSelectedFood()} className="button is-info">+</button> 
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
  );
};
