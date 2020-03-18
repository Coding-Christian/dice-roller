import React from 'react';
import Dice from './dice';

function App(props) {
  return (
    <div className='dice-area'>
      <Dice value='1'/>
      <Dice value='2'/>
      <Dice value='3'/>
      <Dice value='4'/>
      <Dice value='5'/>
    </div>
  );
}

export default App;
