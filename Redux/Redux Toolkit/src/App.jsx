import "./App.css";
import { Humans } from "./Components/Humans";
import { Tasks } from "./Components/Tasks";

function App() {
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
      <div
        style={{
          display: "flex",
          gap: "40px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Humans />
        <Tasks />
      </div>
    </>
  );
}

export default App;
