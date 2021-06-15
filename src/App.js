import Floor from './floor';

const App = () => {
  // console.log("akshay");
  return (
    <>
      <h1 style={{textAlign:"center"}}>Lift Simulation</h1>
      <div className="lift" id="lift"></div>
              
      <Floor cur_floor={3} />
      <Floor cur_floor={2}/>
      <Floor cur_floor={1}/>
    </>
  );
}
 
export default App;
