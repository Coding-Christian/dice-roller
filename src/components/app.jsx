import React, { useState } from 'react';
import DiceTray from './dice-tray';

function App(props) {
  const [numTrays, setNumTrays] = useState(1);
  const trays = [];
  for (let i = 0; i < numTrays; i++) {
    trays.push(<DiceTray key={i} numSides={6}/>);
  }
  return (
    <div className='app'>
      <div className="app-controls">
        <button onClick={() => setNumTrays(num => num - 1)}>-</button>
          Trays
        <button onClick={() => setNumTrays(num => num + 1)}>+</button>
      </div>
      <hr/>
      <div className="app-dice-trays">
        {trays}
      </div>
    </div>
  );
}

export default App;
