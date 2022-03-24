import React, { useState } from 'react';
import axios from 'axios';
import RecipeTemplate from '../Components/RecipeTemplate';
import styled from 'styled-components';
import { IoFastFoodOutline } from 'react-icons/io5';

const Container = styled.div``;

const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  color: rgb(28, 28, 28);
  margin: auto;
  width: 98vw;
  padding: 10px;
  border-bottom: 1px solid rgb(28, 28, 28);
`;

const Form = styled.form``;

const Wrapper = styled.div`
  width: 50%;
  padding: 10px 5px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
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
`;

const CardContainer = styled.div`
  margin: 15px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

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
    <Container>
      <Title>
        FoodBud <IoFastFoodOutline />
      </Title>
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
