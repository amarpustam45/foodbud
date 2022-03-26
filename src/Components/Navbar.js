import React from 'react';
import styled from 'styled-components';
import { IoFastFoodOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

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

const Navbar = () => {
  return (
    <Container>
      <Link to={'/'} style={{ textDecoration: 'none' }}>
        <Title>
          FoodBud <IoFastFoodOutline />
        </Title>
      </Link>
    </Container>
  );
};

export default Navbar;
