import React from "react";
import { useDispatch } from "react-redux";

import { toggleTask } from "../App/Slices/taskSlice.js";
const Task = ({ id, description, isDone }) => {
  const dispatch = useDispatch();

  const handleToggleTask = () => {
    dispatch(toggleTask(id));
  };

  return (
    <div>
      <input type="checkbox" checked={isDone} onChange={handleToggleTask} />
      <span>{description}</span>
    </div>
  );
};

export default Task;
