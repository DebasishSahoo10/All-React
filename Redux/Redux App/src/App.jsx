import "./App.css";
import { useSelector } from "react-redux";



function App() {
  const count = useSelector(state => state.count)

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
        <button>
          Count is : {count}
        </button>
      </div>
    </>
  );
}

export default App;
