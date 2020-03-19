import React, { useState } from 'react';
import DiceTray from './dice-tray';

function App(props) {
  const [sumTotal, setSumTotal] = useState(0);
  return (<>
    <h1>Total: {sumTotal}</h1>
    <hr/>
    <DiceTray setSumTotal={setSumTotal} numSides={6}/>
  </>);
}

export default App;
