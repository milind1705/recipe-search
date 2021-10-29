import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
import {
  Header,
  AppnameComponent,
  SearchComponent,
  SearchInput
} from "./Headers/Header";

import {
  ReciepeListContainer,
  RecipeContainer,
  CoverImg,
  RecipeName,
  Ingredients,
  FullRecipe
} from "./Recipe/RecipeComponent";
export default function App() {
  return (
    <Container>
      <Header>
        <AppnameComponent>
          <img src="https://img.icons8.com/doodle/48/000000/pizza--v1.png" />
          Reciepe Finder
        </AppnameComponent>
        <SearchComponent>
          <img src="https://img.icons8.com/material-outlined/50/000000/search.png" />
          <SearchInput placeholder="Search Recipe"></SearchInput>
        </SearchComponent>
      </Header>
      <ReciepeListContainer>
        <RecipeContainer>
          <CoverImg src="https://img.icons8.com/doodle/48/000000/pizza--v1.png" />
          <RecipeName>Mutter Paneer</RecipeName>
          <Ingredients>See ingredient</Ingredients>
          <FullRecipe>See full reciepe</FullRecipe>
        </RecipeContainer>
        <RecipeContainer>
          <CoverImg src="https://img.icons8.com/doodle/48/000000/pizza--v1.png" />
          <RecipeName>Mutter Paneer</RecipeName>
          <Ingredients>See ingredient</Ingredients>
          <FullRecipe>See full reciepe</FullRecipe>
        </RecipeContainer>
        <RecipeContainer>
          <CoverImg src="https://img.icons8.com/doodle/48/000000/pizza--v1.png" />
          <RecipeName>Mutter Paneer</RecipeName>
          <Ingredients>See ingredient</Ingredients>
          <FullRecipe>See full reciepe</FullRecipe>
        </RecipeContainer>
      </ReciepeListContainer>
    </Container>
  );
}
