import React, { useState } from 'react';
import axios from 'axios';
import RecipeTemplate from '../Components/RecipeTemplate';

const Home = () => {
  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState([]);

  const URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`;

  const getRecipes = async () => {
    const result = await axios.get(URL);
    setRecipes(result.data.hits);
    console.log(result.data.hits);
  };

  const submit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  return (
    <div>
      <h1>Title</h1>
      <form onSubmit={submit}>
        <input
          type='text'
          placeholder='Ingredient'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input type='submit' value='Search' />
      </form>
      <div>
        {recipes.map((recipe) => {
          return <RecipeTemplate recipe={recipe} />;
        })}
      </div>
    </div>
  );
};

export default Home;
