import React, { useState } from 'react';
import Dice from './dice';

function App(props) {
  const [diceVals, setDiceVals] = useState([]);
  const options = [1, 2, 3, 4, 5, 6];
  function changeNumDice(change) {
    if (change > 0) {
      const randVal = options[Math.floor(Math.random() * options.length)];
      setDiceVals(diceVals => [...diceVals, randVal]);
    } else if (diceVals.length) {
      setDiceVals(diceVals => diceVals.slice(0, diceVals.length + change));
    }
  }
  function rollDice() {
    const newDiceVals = [];
    for (let i = 0; i < diceVals.length; i++) {
      newDiceVals.push(options[Math.floor(Math.random() * options.length)]);
    }
    setDiceVals(newDiceVals);
  }
  return (<>
    <h1>Total: {diceVals.reduce((acc, curr) => acc + curr, 0)}</h1>
    <div className='dice-controls'>
      <button onClick={() => changeNumDice(-1)}>-</button>
      {diceVals.length}
      <button onClick={() => changeNumDice(1)}>+</button>
      <button onClick={rollDice}>Roll</button>
    </div>
    <div className='dice-area'>
      {diceVals.map((value, index) => (<Dice key={index} value={value} />))}
    </div>
  </>);
}

export default App;
