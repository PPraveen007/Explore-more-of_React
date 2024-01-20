import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  // let counter = 10;

  const addvalue = () => {
    //in this we can find that the value is updated only onne time doesn't matter how many times we call the it. becz the react take values one by one and isf you give the value in bunch then it take it like single input
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);

    // here it will treat every line as different and add the value 3 times to privious value becz we are calling the prv value every time and then we are updating the value
    setCounter((prvs) => prvs + 1);
    setCounter((prvs) => prvs + 1);
    setCounter((prvs) => prvs + 1);
  };

  return (
    <>
      <h1>React course with Praveen {counter}</h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addvalue}>Add value</button>{" "}
      <button>Remove value</button>
      <p>footer:{counter}</p>
    </>
  );
}

export default App;
