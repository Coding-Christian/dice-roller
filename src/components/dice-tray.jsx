import React from 'react';
import useDice from '../hooks/useDice';
import Dice from './dice';

function DiceTray({ numSides }) {
  const [diceVals, diceTotal, addDice, removeDice, rollDice] = useDice(numSides);
  return (<>
    <h2> d{numSides} Total: {diceTotal}</h2>
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

export default DiceTray;
