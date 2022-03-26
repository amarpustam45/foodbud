import styled from 'styled-components';
import { GiKnifeFork } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  width: 250px;
  border: 1px solid rgba(82, 81, 81, 0.4);
  padding: 5px;
  border-radius: 5px;
  margin: 10px 0;
  background-color: rgba(168, 193, 255, 0.6);
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 96%;
  object-fit: cover;
`;

const Title = styled.h3`
  padding: 3px 5px 5px 5px;
`;

const InfoContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
`;

const CalInfo = styled.div`
  font-weight: 600;
`;

const Button = styled.button`
  bottom: 5px;
  right: 5px;
  padding: 3px 5px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition: all 0.25s ease-in-out;

  &:hover {
    background-color: rgb(255, 193, 99);
    transform: translateY(-3px);
    filter: drop-shadow(0 3px 4px #000000);
  }
`;

const RecipeTemplate = ({ recipe }) => {
  const cal = recipe['recipe']['calories'];
  const navigate = useNavigate();

  const toSinglePage = () => {
    navigate(`/${recipe['recipe']['label']}`, { state: { recipe } });
  };

  return (
    <Container>
      <ImageContainer>
        <Image src={recipe['recipe']['image']} />
      </ImageContainer>
      <Title>{recipe['recipe']['label']} </Title>
      <InfoContainer>
        <CalInfo>Cal. {cal.toFixed(2)}</CalInfo>
        <Button onClick={toSinglePage}>
          Get Recipe <GiKnifeFork />
        </Button>
      </InfoContainer>
    </Container>
  );
};

export default RecipeTemplate;
