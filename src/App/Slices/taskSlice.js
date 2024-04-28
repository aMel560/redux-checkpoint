import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: [
    { id: "1", description: "task1", isDone: true },
    { id: "2", description: "task2", isDone: true },
    { id: "3", description: "task3", isDone: false },
  ],
  reducers: {
    AddTask: (state, action) => {
      //fonction1 qui permet d'ajouter de nouvelles tasks
      const { title } = action.payload;
      const newTask = {
        id: Date.now(),
        description: title,
        isDone: false,
      };
      state.push(newTask);
    },
    toggleTask: (state, action) => {
      // Fonction2 qui permet de basculer le 'isDone'
      const { id } = action.payload;
      const task = state.find((t) => t.id === id);
      if (task) {
        task.isDone = !task.isDone;
      }
    },
  },
});

export const { AddTask, toggleTask } = taskSlice.actions;
export default taskSlice.reducer;
