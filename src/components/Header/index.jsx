/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../store/reducers/PokemonTeam";
import { resetCurrentPokemon } from "../../store/reducers/CurrentPokemon";

import { useNavigate } from "react-router-dom";

import { MainHeader } from "./styles";
import {
  Container,
  FlexGrid,
  ThemeButton,
} from "../../styles/GlobalComponents";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { modal } = useSelector((store) => store.pokemonTeam);

  function handleHome(){
    dispatch(resetCurrentPokemon());
    navigate("/");
  }

  function handleTeam() {
    if (modal) {
      dispatch(toggleModal(false));
    } else {
      dispatch(toggleModal(true));
    }
  }

  return (
    <MainHeader>
      <Container>
        <FlexGrid alignItems="center" justifyContent="space-between" mobileOrientation="row">
          <a onClick={handleHome}>Pokedux</a>
          <ThemeButton
            buttonSize="medium"
            buttonStyle="outline2"
            onClick={handleTeam}
          >
            Time
          </ThemeButton>
        </FlexGrid>
      </Container>
    </MainHeader>
  );
};

export default Header;
