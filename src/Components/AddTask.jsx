import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddTask } from "../App/Slices/taskSlice.js";

const Addtask = () => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description) {
      dispatch(AddTask({ id: Date.now(), description, isDone: false }));
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTask;
