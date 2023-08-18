import { createSlice, nanoid, createAction } from "@reduxjs/toolkit";
import { taskSlice } from "./taskSlice";

const createHumans = (name) => ({
  id: nanoid(),
  name: name,
  tasksAssigned: "",
});

const initialState = [createHumans("Basu"), createHumans("Abhisek")];

export const humansSlice = createSlice({
  name: "humans",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(createHumans(action.payload.humanName));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(taskSlice.actions.assignment, (state, action) => {
      if (action.payload.humanId === "") {
        const human = state.find(
          (human) => human.tasksAssigned === action.payload.taskId
        );
        human.tasksAssigned = ""
        return;
      }
      const replacedHuman = state.find((human) => human.tasksAssigned === action.payload.taskId);
      if (replacedHuman !== undefined) {
        replacedHuman.tasksAssigned = ""    
      }
      const human = state.find((human) => human.id === action.payload.humanId);
      human.tasksAssigned = action.payload.taskId;
    });
  },
});

export const addHuman = createAction("humans/add", (humanName) => ({
  payload: { humanName },
}));
