import { useState } from "react";


function App() {
  const [count,setcount]=useState(0);
  
  return (
    <div >
      <h1>Counter</h1>
      <p>count: {count}</p>
      <button onClick={() =>{
        setcount((t) => t+1)
      }}>Increment</button>
      <button onClick={() =>{
         setcount((t) => t-1)
      }}>Decrement</button>
      <button onClick={() =>{
         setcount((t) => t=0)
      }}>Stop</button>
    </div>
  );
}

export default App;
