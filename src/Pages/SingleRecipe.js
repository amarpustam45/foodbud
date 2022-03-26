import React from 'react';
import { useLocation } from 'react-router-dom';

const SingleRecipe = () => {
  const location = useLocation();
  const recipe = location.state.recipe;
  console.log(recipe);

  return <div>SingleRecipe</div>;
};

export default SingleRecipe;
