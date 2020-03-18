import React from 'react';
import Dice from './dice';

function App(props) {
  const options = [1, 2, 3, 4, 5, 6];
  const values = [];
  for (let i = 0; i < 5; i++) {
    values.push(options[Math.floor(Math.random() * options.length)]);
  }
  const dice = values.map((value, index) => (<Dice key={index} value={value}/>));
  const total = values.reduce((acc, curr) => acc + curr);
  return (<>
    <h1>Total: {total}</h1>
    <div className='dice-area'>
      {dice}
    </div>
  </>);
}

export default App;
