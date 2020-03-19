import React, { useState } from 'react';
import DiceTray from './dice-tray';

function App(props) {
  const [sumTotal, setSumTotal] = useState(0);
  return (<>
    <h1>Total: {sumTotal}</h1>
    <hr/>
    <div className="dice-tray-area">
      <div className="tray-col">
        <DiceTray setSumTotal={setSumTotal} numSides={4}/>
        <DiceTray setSumTotal={setSumTotal} numSides={6}/>
        <DiceTray setSumTotal={setSumTotal} numSides={8}/>
        <DiceTray setSumTotal={setSumTotal} numSides={10}/>
      </div>
      <div className="tray-col">
        <DiceTray setSumTotal={setSumTotal} numSides={12}/>
        <DiceTray setSumTotal={setSumTotal} numSides={20}/>
        <DiceTray setSumTotal={setSumTotal} numSides={100}/>
      </div>
    </div>
  </>);
}

export default App;
