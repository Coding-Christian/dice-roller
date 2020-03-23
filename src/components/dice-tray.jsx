import React from 'react';
import useDice from '../hooks/useDice';
import Dice from './dice';

function DiceTray(props) {
  const [diceVals, diceTotal, addDice, removeDice, rollDice, setNumSides] = useDice(4);
  function handleChange(event) {
    setNumSides(event.target.value);
  }
  return (
    <div className='dice-tray'>
      <h2 className='dice-tray-header'>Total: {diceTotal}</h2>
      <div className='dice-tray-controls'>
        <select name="diceType" id="diceType" onChange={handleChange}>
          <option value={4}>d4</option>
          <option value={6}>d6</option>
          <option value={8}>d8</option>
          <option value={10}>d10</option>
          <option value={12}>d12</option>
          <option value={20}>d20</option>
          <option value={100}>d100</option>
        </select>
        <button onClick={() => removeDice(1)}>-</button>
        {diceVals.length}
        <button onClick={() => addDice(1)}>+</button>
        <button onClick={rollDice}>Roll</button>
      </div>
      <div className='dice-tray-dice'>
        {diceVals.map((value, index) => (<Dice key={index} value={value} />))}
      </div>
    </div>
  );
}

export default DiceTray;
