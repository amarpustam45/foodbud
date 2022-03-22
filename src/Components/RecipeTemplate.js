import React from 'react';

const RecipeTemplate = ({ recipe }) => {
  return (
    <div>
      <h2>Name: </h2>
      <img src={recipe['recipe']['image']} />
      <p>{recipe['recipe']['label']}</p>
    </div>
  );
};

export default RecipeTemplate;
