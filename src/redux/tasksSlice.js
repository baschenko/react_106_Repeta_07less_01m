import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
});

export default slice.reducer;
