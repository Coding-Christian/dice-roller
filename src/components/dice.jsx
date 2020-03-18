import React from 'react';

function Dice(props) {
  return (
    <div className='square-dice'>
      {props.value}
    </div>
  );
}

export default Dice;
