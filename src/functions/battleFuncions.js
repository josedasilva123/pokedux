import { types } from "./pokemonTypes";

/* Avalia se o alvo é imune ao movimento ou não */
export function isImune(moveType, pokemonTypes) {
  const imuneTypes = pokemonTypes.filter((type) => {
    const currentMoveType = types.find((t) => {
      return t.type === type.type.name;
    });
    return currentMoveType.imune.includes(moveType);
  });
  if (imuneTypes.length > 0) {
    return true;
  } else {
    return false;
  }
}

/* Avalia se o movimento foi super efetivo ou não */
export function isSuperEffective(moveType, pokemonTypes) {
  let modifier = 0;
  pokemonTypes.forEach((type) => {
    const currentMoveType = types.find((t) => {
      return t.type === type.type.name;
    });
    if (currentMoveType.halfDamage.includes(moveType)) {
      modifier = modifier - 1;
    } else if (currentMoveType.doubleDamage.includes(moveType)) {
      modifier = modifier + 1;
    }
  });
  if (modifier > 0) {
    return "super-effective";
  } else if (modifier < 0) {
    return "not-very-effective";
  } else {
    return false;
  }
}

export function calculateDamage(base, multiplier, attack, defense) {
  console.log(multiplier);
  const formula1 = (2 * 50) / 5 + 2;
  const formula2 = (formula1 * base * (attack / defense)) / 50;
  const formula3 = (formula2 + 2) * multiplier;
  const formula4 = Math.random() * 15;
  const formula5 = (100 - formula4) / 100;
  const finalFormula = Math.round(formula3 * formula5);
  return finalFormula;
}

/* Executa os movimentos */
/*
export function doPokemonMove(
  chat,
  setChat,
  dispatch,
  user,
  target,
  move,
  targetHP,
  setTargetHP
) {

    const newChat = [...chat];

    let attack;
    let defense;
    if (move.damage_class.name === "physical") {
      attack = 1;
      defense = 2;
    } else {
      attack = 3;
      defense = 4;
    }

    // Função para textos dos movimentos
    function textMove(pokemon, move) {
      return `${pokemon.name.toUpperCase()} utilizou ${move.name.toUpperCase()}`;
    }

    // Função de chamada de dano 
    function doDamage(multiplier) {
      const damage = calculateDamage(
        move.power,
        multiplier,
        user.stats[attack].value,
        target.stats[defense].value
      );
      dispatch(setTargetHP(targetHP - damage));
    }

    function executeMove(multiplier, message) {
      if (multiplier !== 1) {
        newChat.push({
          text: textMove(user, move),
        });
        newChat.push({
          text: message,
          callback: () => {
            doDamage(multiplier);
          },
        });
      } else {
        newChat.push({
          text: textMove(user, move),
          callback: () => {
            doDamage(multiplier);
          },
        });
      }
    }

    // Verificação de imunidade 
    const imune = isImune(move.type.name, target.types);
    if (move.damage_class.name === "status") {
      newChat.push({
        text: textMove(user, move),
      });
      newChat.push({
        text: "Mas este movimento não foi programado ainda :(",
      });
    } else if (imune) {
      newChat.push({
        text: textMove(user, move),
      });

      newChat.push({
        text: "Ops! O alvo é imune a este movimento...",
      });
    } else {
      // É super efetivo?
      if (
        isSuperEffective(move.type.name, target.types) === "super-effective"
      ) {
        executeMove(2, "Foi super efetivo!");
      } else if (
        // Não foi muito efetivo? 
        isSuperEffective(move.type.name, target.types) === "not-very-effective"
      ) {
        executeMove(.5, "Não foi muito efetivo!");        
      } else {
        executeMove(1); 
      }
    }
    dispatch(setChat(newChat));
    return newChat;
}
*/