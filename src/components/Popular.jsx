import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=1f27e01d29474f18a0cd350b4e610f22&number=9`
    );
    const data = await api.json();
    console.log("hello");
    console.log(data.recipes);
    setPopular(data.recipes);
  };

  useEffect(() => {
    getPopular();
  }, []); //only run when the component is mounted

  return (
    <Wrapper>
      <h3>Popular Picks: </h3>
      {popular.map((recipe) => {  
        return (
          <Card key={recipe.id}>
            <img src={recipe.image} alt={recipe.title} />
            <h4>{recipe.title}</h4>
          </Card>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;
const Card = styled.div`
  margin: 2rem 0rem;
  border-radius: 2rem;
  overflow: hidden;

  img {
    border-radius: 2rem;
  }
`;

export default Popular;
