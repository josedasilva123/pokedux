import React from "react";

import Header from "../Header";
import PokemonList from "../PokemonList";
import CurrentPokemon from "../CurrentPokemon";
import PokemonTeam from "../PokemonTeam";
import PokemonBattle from "../PokemonBattle";

import { MainBox } from "./styles";
import { Container } from "../../styles";
import { FlexGrid } from "../../styles/GlobalComponents";



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
