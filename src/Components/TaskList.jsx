import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task.jsx";

const TaskList = () => {
  const tasks = useSelector((state) => state.task.task);

  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </div>
  );
};

export default TaskList;
