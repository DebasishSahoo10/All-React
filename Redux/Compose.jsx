import { compose } from "redux";

const makelouder = (string) => string.toUpperCase();
const repeat = (string) => string.repeat(3);
const embolden = (string) => string.bold();

const composedFunction = compose(makelouder, repeat, embolden);
console.log(composedFunction("testing"));

export default function App() {
  return (
    <div className="App">
      <h1>Hello redux</h1>
    </div>
  );
}
