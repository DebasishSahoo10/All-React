import { createStore } from "redux";

const initialState = { value: 0 };
const reducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") return { value: state.value + 1 };
  if (action.type === "ADD")
    return { value: state.value + action.payload.count };
  return state;
};

const store = createStore(reducer);
// it is an anti pattern to have multiple stores

store.subscribe(() => console.log(store.getState()));
// subscribing means everytime the state changes we want a particular function to run

store.dispatch({ type: "INCREMENT", payload: {} });
// dispatch becomes the default way to pass the state change

export default function App() {
  return (
    <div className="App">
      <h1>Hello redux</h1>
    </div>
  );
}
