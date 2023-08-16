// First of all why some one need to do that : simply to avoid the horror of spread operators. and keep code short and crisp.

import { createStore, combineReducers } from "redux";

const initialState = {
  users: [{ id: 1, name: "Steve" },{ id: 2, name: "Captain" }],
  tasks: [{ title: "File Reports" }, { title: "Order more" }]
};

const userReducer = (users = initialState.users, action) => {
  if (action.type === "ADD_TASK") return [...users, action.payload];
  return users;
};
const taskReducer = (tasks = initialState.tasks, action) => {
  if (action.type === "ADD_USER") return [...tasks, action.payload];
  return tasks;
};

const reducer = combineReducers({ users: userReducer, tasks: taskReducer });
const store = createStore(reducer);
console.log(store.getState())


export default function App() {
  return (
    <div className="App">
      <h1>Hello redux</h1>
    </div>
  );
}
