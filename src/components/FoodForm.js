import React from 'react';
import { useState } from 'react';
import { button } from 'react-bootstrap';

export const FoodForm = ({ addFoodHandler }) => {
  const handleSubmitForm = (e) => {
    // This e.preventdefault function stops the page from reloading
    e.preventDefault();
    const newFood = {
      name: name,
      calories: calories,
      image: image,
    };
    addFoodHandler(newFood);
    setName('');
    setCalories('');
    setImage('');
  };

  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [image, setImage] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);

  return (
    <>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setIsFormVisible(!isFormVisible)}>Add New Food</button>

      {isFormVisible && (
        <form onSubmit={handleSubmitForm}>
          <label for="name">Name</label>
          <input onChange={(e) => setName(e.target.value)} value={name} type="text" id="name"/>

          <label for="calories">Calories</label>
          <input onChange={(e) => setCalories(e.target.value)} value={calories} type="text" id="calories"/>

          <lable for="image">Select Image:</lable>
          <input onChange={(e) => setImage(e.target.value)} value={image} type="text" id="image"/>
          <button type="submit">Create New Food</button>
        </form>
      )}
    </>
  );
};
