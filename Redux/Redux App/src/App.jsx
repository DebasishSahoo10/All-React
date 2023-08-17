import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <img
          src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg"
          className="logo"
          alt="redux logo"
        />
      </div>
      <h1>Redux + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count is : {count}
        </button>
      </div>
    </>
  );
}

export default App;
