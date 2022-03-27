import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../Components/Navbar';
import { mobile } from '../Responsive';

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-image: linear-gradient(rgb(255, 243, 222), rgb(255, 193, 99));
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: max-content;
  padding: 20px 0;
  ${mobile({ flexDirection: 'column' })}
`;

const MainContainer = styled.div`
  flex: 1;
  padding: 20px 40px;
  ${mobile({ borderBottom: '1px solid rgb(28, 28, 28)' })}
`;

const ImageContainer = styled.div`
  width: 100%;
`;

const Image = styled.img`
  margin-bottom: 20px;
  border-radius: 10px;
  filter: drop-shadow(-3px 3px 6px rgba(87, 87, 87, 0.6));
`;

const MainInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

const Title = styled.h2`
  text-decoration: underline;
  padding: 20px 0;
  font-size: 2rem;
`;

const SubTitle = styled.h3`
  padding: 8px 0;
`;

const Info = styled.h4``;

const RecipeContianer = styled.div`
  flex: 2;
  padding: 20px 40px;
  ${mobile({ borderBottom: '1px solid rgb(28, 28, 28)' })}
`;

const Ingredient = styled.div`
  padding: 10px;
`;

const HealthContianer = styled.div`
  flex: 2;
  padding: 20px 40px;
  ${mobile({ borderBottom: '1px solid rgb(28, 28, 28)' })}
`;

const HealthInfo = styled.ul``;

const HealthItem = styled.li`
  display: block;
  width: 33%;
  float: left;
  padding-bottom: 5px;
  font-weight: 500;
`;

const SingleRecipe = () => {
  const location = useLocation();
  const recipe = location.state.recipe;
  const cal = recipe['recipe']['calories'];
  const cuisineType = recipe['recipe']['cuisineType'];
  const dishType = recipe['recipe']['dishType'];
  const ingredientLines = recipe['recipe']['ingredientLines'];
  const cautions = recipe['recipe']['cautions'];
  const dietLabels = recipe['recipe']['dietLabels'];
  const healthLabels = recipe['recipe']['healthLabels'];
  console.log(recipe);

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <MainContainer>
          <ImageContainer>
            <Image src={recipe['recipe']['image']} />
          </ImageContainer>
          <Title>{recipe['recipe']['label']}</Title>
          <MainInfo>
            <SubTitle>Calories</SubTitle>
            <Info>{cal.toFixed(3)}</Info>
          </MainInfo>
          <MainInfo>
            <SubTitle>Cuisine</SubTitle>
            <Info style={{ textTransform: 'capitalize' }}>
              {cuisineType.map((item) => {
                return <span key={item}>{item} </span>;
              })}
            </Info>
          </MainInfo>
          <MainInfo>
            <SubTitle>Dish Type</SubTitle>
            <Info style={{ textTransform: 'capitalize' }}>
              {dishType.map((item) => {
                return <span key={item}>{item} </span>;
              })}
            </Info>
          </MainInfo>
        </MainContainer>
        <RecipeContianer>
          <Title>Recipe</Title>
          <SubTitle>
            {ingredientLines.map((item) => {
              return <Ingredient key={item}>{item}</Ingredient>;
            })}
          </SubTitle>
        </RecipeContianer>
        <HealthContianer>
          <MainInfo>
            <SubTitle>Diet Labels</SubTitle>
            <Info style={{ textTransform: 'capitalize' }}>
              {dietLabels.map((item) => {
                return <span key={item}>{item} </span>;
              })}
            </Info>
          </MainInfo>
          <MainInfo>
            <SubTitle>Cautions</SubTitle>
            <Info style={{ textTransform: 'capitalize' }}>
              {cautions.map((item) => {
                return <span key={item}>{item} </span>;
              })}
            </Info>
          </MainInfo>
          <SubTitle>Health Labels:</SubTitle>
          <HealthInfo>
            {healthLabels.map((item) => {
              return <HealthItem key={item}>{item}</HealthItem>;
            })}
          </HealthInfo>
        </HealthContianer>
      </Wrapper>
    </Container>
  );
};

export default SingleRecipe;
