import { useState } from 'react';

const useDice = function (options, quantity = 0) {
  const [diceVals, setDiceVals] = useState([]);
  if (quantity && quantity > 0) {
    for (let i = 0; i < quantity; i++) {
      addDice(quantity);
    }
  }
  function addDice(quantity) {
    if (quantity > 0) {
      const randVals = [];
      for (let i = 0; i < quantity; i++) {
        randVals.push(options[Math.floor(Math.random() * options.length)]);
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
  return [diceVals, addDice, removeDice, rollDice];
};

export default useDice;
