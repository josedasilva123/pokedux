import React from "react";
import Header from "../Header";
import { Container } from "../../styles";
import PokemonList from "../PokemonList";
import CurrentPokemon from "../CurrentPokemon";
import PokemonTeam from "../PokemonTeam";
import { MainBox } from "./style";
import { FlexGrid } from "../../styles/GlobalComponents";
import PokemonBattle from "../PokemonBattle";


const Main = () => { 
  return (
    <MainBox>
      <Header />
      <Container>
          <FlexGrid justifyContent="space-between" mobileOrientation="reverse">
            <PokemonList />
            <CurrentPokemon />
          </FlexGrid>
      </Container>
      <PokemonTeam />
      <PokemonBattle />
    </MainBox>
  );
};

export default Main;
