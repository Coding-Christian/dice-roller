import React, { useEffect, useState } from 'react';
import useDice from '../hooks/useDice';
import Dice from './dice';

function DiceTray({ setSumTotal, numSides }) {
  const [diceVals, diceTotal, addDice, removeDice, rollDice] = useDice(numSides);
  const [prevTotal, setPrevTotal] = useState(0);
  useEffect(() => {
    setSumTotal(sum => sum - prevTotal + diceTotal);
    setPrevTotal(diceTotal);
  }, [diceTotal]);
  return (<>
    <h1>Total: {diceTotal}</h1>
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
