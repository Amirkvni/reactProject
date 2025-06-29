import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  const clickHandler = () => {
    for (let i = 0; i < 5000; i++) {
      console.log("ajokb");
    }
    setCount((prev) => prev + 1);
  };
  const changeHandler = () => {
    setNumber((prev) => prev + 1);
  };
  return (
    <div>
      <p>count :{count}</p>
      <p>number :{number}</p>
      <button onClick={clickHandler}>increase</button>
      <button onClick={changeHandler}>change number</button>
    </div>
  );
}

export default App;
