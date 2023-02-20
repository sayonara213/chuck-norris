import { createSlice } from "@reduxjs/toolkit";
import { IJoke } from "../models/IJoke";

interface JokeState {
  joke: IJoke;
  isLoading: boolean;
  error: string | null;
}

const initialState: JokeState = {
  joke: {
    categories: [],
    created_at: "",
    icon_url: "",
    id: "",
    updated_at: "",
    url: "",
    value: "",
  },
  isLoading: false,
  error: null,
};

const jokeSlice = createSlice({
  name: "joke",
  initialState,
  reducers: {
    setJoke: (state, action) => {
      state.joke = action.payload;
    },
  },
});

export default jokeSlice.reducer;

export const { setJoke } = jokeSlice.actions;
