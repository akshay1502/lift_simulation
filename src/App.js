import { useState } from 'react';
import Build from './build';

const App = () => {
  const [ floors, setFloors ] = useState('');
  const [ startBuild, setStartBuild] = useState(false);
  
  const opertaionBuild = () => {
    setStartBuild(true);
    setFloors(document.getElementById('floorNumbers').value);
    document.getElementById('lift1').style.display = 'block';
    // document.getElementById('lift2').style.display = 'block';
  }
  return(
    <>
      <h1 style={{ textAlign:"center" }}>Lift Simulation</h1>
      <div className="lift" id="lift1"></div>
      {/* <div className="lift" id="lift2"></div>/ */}
      <label htmlFor="floorNumbers">No. of Floors</label>
      <input 
        type = "number"
        name = "floorNumbers"
        id = "floorNumbers"
      />
      <button onClick = { opertaionBuild }>Build</button>
      <div>{ startBuild && <Build floors = { floors }/> }</div>
    </>
  );
}
 
export default App;

