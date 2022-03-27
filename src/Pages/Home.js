import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeTemplate from '../Components/RecipeTemplate';
import styled from 'styled-components';
import Navbar from '../Components/Navbar';
import { mobile } from '../Responsive';

const Container = styled.div`
  background-image: linear-gradient(rgb(255, 243, 222), rgb(255, 193, 99));
`;

const Form = styled.form``;

const Wrapper = styled.div`
  width: 50%;
  padding: 10px 5px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  ${mobile({ width: '100%' })}
`;

const Input = styled.input`
  width: 75%;
  padding: 10px;
  font-size: 1.3rem;
  font-weight: 600;
  text-align: center;
`;

const Button = styled.input`
  width: 20%;
  padding: 10px;
  font-size: 1.3rem;
  font-weight: 600;
  &:hover {
    background-color: rgb(255, 193, 99);
  }
`;

const CardContainer = styled.div`
  margin: 15px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${mobile({ justifyContent: 'center', gap: '20px' })}
`;

const Home = () => {
  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState(() => {
    let localResult = JSON.parse(localStorage.getItem('recipe'));
    if (localResult) {
      return localResult;
    } else {
      localResult = [];
      return localResult;
    }
  });

  const URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`;

  const getRecipes = async () => {
    const result = await axios.get(URL);
    setRecipes(result.data.hits);
  };

  useEffect(() => {
    const init = async () => {
      const setup = await axios.get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=lunch&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`
      );
      setRecipes(setup.data.hits);
    };
    init();
  }, []);

  useEffect(() => {
    localStorage.setItem('recipe', JSON.stringify(recipes));
  }, [recipes]);

  const submit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  return (
    <Container>
      <Navbar />
      <Form onSubmit={submit}>
        <Wrapper>
          <Input
            type='text'
            placeholder='Ingredients (e.g: eggs,bread)'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button type='submit' value='Search' />
        </Wrapper>
      </Form>
      <CardContainer>
        {recipes.map((recipe) => {
          return (
            <RecipeTemplate recipe={recipe} key={recipe['recipe']['uri']} />
          );
        })}
      </CardContainer>
    </Container>
  );
};

export default Home;
