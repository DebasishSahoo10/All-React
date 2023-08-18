import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, taskAssign, toggleTask } from "../Redux/taskSlice";
export const Tasks = () => {
  const humans = useSelector((state) => state.humans);
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const [taskInput, setTaskInput] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addTask(taskInput));
          setTaskInput("");
        }}
      >
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <input type="submit" />
      </form>
      {tasks.map((tas) => {
        return (
          <li key={tas.id} style={{ display: "flex", gap: "5px" }}>
            <input
              type="checkbox"
              onChange={() => dispatch(toggleTask(tas.id))}
            />
            <p>{tas.title} - </p>
            <p>{tas.completed ? "complete" : "pending"}</p>
            <select
              value={tas.assignedTo}
              onChange={(e) => dispatch(taskAssign(tas.id, e.target.value))}
            >
              <option value="">Unassigned</option>
              {humans.map((man) => {
                if (man.tasksAssigned === tas.id || man.tasksAssigned === "") {
                  return (
                    <option value={man.id} key={man.id}>
                      {man.name}
                    </option>
                  );
                }
              })}
            </select>
          </li>
        );
      })}
    </div>
  );
};
