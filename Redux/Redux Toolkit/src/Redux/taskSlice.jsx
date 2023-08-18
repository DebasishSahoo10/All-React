import { createSlice, nanoid, createAction } from "@reduxjs/toolkit";

const createTask = (title) => ({
  id: nanoid(),
  title: title,
  completed: false,
  assignedTo: "",
});

const initialState = [
  createTask("Order Grocceries"),
  createTask("Buy Pencils"),
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(createTask(action.payload.taskName));
    },
    toggle: (state, action) => {
      const task = state.find((task) => task.id === action.payload.taskId);
      task.completed = !task.completed;
    },
    assignment : (state, action) => {
      const task = state.find(task => task.id === action.payload.taskId)
      task.assignedTo = action.payload.humanId
    }
  },
});

export const toggleTask = createAction('tasks/toggle', (taskId) => ({payload : {taskId}}))
export const addTask = createAction('tasks/add', (taskName) => ({payload : {taskName}}))
export const taskAssign = createAction('tasks/assignment', (taskId, humanId) => ({payload : {taskId, humanId}}))