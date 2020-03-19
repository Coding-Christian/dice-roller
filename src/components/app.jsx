import React from 'react';
import useDice from '../hooks/useDice';
import Dice from './dice';

function App(props) {
  const [diceVals, addDice, removeDice, rollDice] = useDice([1, 2, 3, 4, 5, 6]);
  return (<>
    <h1>Total: {diceVals.reduce((acc, curr) => acc + curr, 0)}</h1>
    <div className='dice-controls'>
      <button onClick={() => removeDice(1)}>-</button>
      {diceVals.length}
      <button onClick={() => addDice(1)}>+</button>
      <button onClick={rollDice}>Roll</button>
    </div>
    <div className='dice-area'>
      {diceVals.map((value, index) => (<Dice key={index} value={value} />))}
    </div>
  </>);
}

export default App;
