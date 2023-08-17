import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Decrement, Increment, Reset, Set } from "./Redux/Actions";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

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
      <button onClick={() => dispatch(Increment())}>Count is : {count}</button>
      <button onClick={() => dispatch(Decrement())}>Decrement</button>
      <button onClick={() => dispatch(Reset())}>Reset</button>
      <button onClick={() => dispatch(Set(10))}>Set to 10</button>
    </>
  );
}

export default App;
