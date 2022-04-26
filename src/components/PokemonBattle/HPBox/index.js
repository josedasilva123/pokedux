import React from "react";
import { LifeBarBox, LifeBar } from "../styles";

const HPBox = ({ currentHP, maxHP }) => {
  /* Calcula o % de vida */
  function getHPPercent(currentHP, maxHP) {
    if (currentHP > 0) {
      const formula = (100 / maxHP) * currentHP;
      return String(formula) + "%";
    } else {
      return String(1) + "%";
    }
  }
  /* Mascara o HP negativo */
  function HPMask(currentHP) {
    if (currentHP > 0) {
      return currentHP;
    } else {
      return 0;
    }
  }

  return (
    <LifeBarBox>
      <p>
        Enemy: HP {HPMask(currentHP)}/{maxHP}
      </p>
      <LifeBar currentHP={getHPPercent(currentHP, maxHP)}>
        <span></span>
      </LifeBar>
    </LifeBarBox>
  );
};

export default HPBox;
