import { Prev } from "react-bootstrap/esm/PageItem";
import Chai from "./Chai";
import { useState } from "react";
//the "useState" hook is a fundamental part of managing state in functional components
// need of react hook
function App() {
  // Declare a state variable named "counter" with initial value 10
  const [counter, setCounter] = useState(10);

  // let counter = 10;
  const addvalue = () => {
    // counter += 1;
    if (counter < 20) {
      setCounter(counter + 1);
      setCounter((prevCounter) => prevCounter + 1); //prevCounter will hold the previous state(value) of counter
    }
    console.log(counter);
  };
  const removeValue = () => {
    setCounter(counter - 1); //
  };

  return (
    <>
      <h1>React Series {counter}</h1>
      <h3>Counter Value: {counter}</h3>
      <button onClick={addvalue}>Add Value</button>
      <br />
      <button onClick={removeValue}>remove Value</button>
    </>
  );
}

export default App;
