import { useState } from 'react';

const useDice = function (numSides, quantity = 0) {
  const options = [];
  for (let i = 1; i <= numSides; i++) {
    options.push(i);
  }
  const [diceVals, setDiceVals] = useState([]);
  const diceTotal = diceVals.reduce((acc, curr) => acc + curr, 0);
  if (quantity && quantity > 0) {
    for (let i = 0; i < quantity; i++) {
      addDice(quantity);
    }
  }
  function addDice(quantity) {
    if (quantity > 0) {
      const randVals = [];
      for (let i = 0; i < quantity; i++) {
        randVals.push(0);
      }
      setDiceVals(diceVals => [...diceVals, ...randVals]);
    }
  }
  function removeDice(quantity) {
    if (quantity >= diceVals.length) {
      setDiceVals([]);
    } else if (quantity > 0) {
      setDiceVals(diceVals => diceVals.slice(0, diceVals.length - quantity));
    }
  }
  function rollDice() {
    const newDiceVals = [];
    for (let i = 0; i < diceVals.length; i++) {
      newDiceVals.push(options[Math.floor(Math.random() * options.length)]);
    }
    setDiceVals(newDiceVals);
  }
  return [diceVals, diceTotal, addDice, removeDice, rollDice];
};

export default useDice;
