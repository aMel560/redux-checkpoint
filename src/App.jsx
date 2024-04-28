import React from "react";
import AddTask from "./Components/AddTask";

import TaskList from "./Components/TaskList";

export default function App() {
  return (
    <>
      <div>My ToDo List</div>
      <AddTask />

      <TaskList />
    </>
  );
}
