import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

export const fetchTasks = createAsyncThunk("tasks/getAll", async () => {
  const res = await axios.get("/tasks");
  return res.data;
});

// export const addTask =

// export const deleteTask =
