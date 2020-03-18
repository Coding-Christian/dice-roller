import React, { useState } from 'react';
import Dice from './dice';

function App(props) {
  let [numDice, setNumDice] = useState(0);
  let [diceVals, setDiceVals] = useState([]);
  const options = [1, 2, 3, 4, 5, 6];
  function changeNumDice(change) {
    if (change > 0) {
      const randVal = options[Math.floor(Math.random() * options.length)];
      setDiceVals(diceVals => [...diceVals, randVal]);
      setNumDice(num => num + change);
    } else if (numDice > 0) {
      setDiceVals(diceVals => diceVals.slice(0, diceVals.length + change));
      setNumDice(num => num + change);
    }
  }
  return (<>
    <h1>Total: {diceVals.reduce((acc, curr) => acc + curr, 0)}</h1>
    <div className='dice-controls'>
      <button onClick={() => changeNumDice(-1)}>-</button>
      {numDice}
      <button onClick={() => changeNumDice(1)}>+</button>
      <button>Roll</button>
    </div>
    <div className='dice-area'>
      {diceVals.map((value, index) => (<Dice key={index} value={value} />))}
    </div>
  </>);
}

export default App;
