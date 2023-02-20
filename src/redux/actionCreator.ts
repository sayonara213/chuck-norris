import { AppDispatch } from "./store";
import { setFailedJoke, setRequestJoke, setSuccessJoke } from "./jokeSlice";
import { GetJoke } from "../services/services";

export const fetchJoke = async (dispatch: AppDispatch, value: string) => {
  try {
    dispatch(setRequestJoke());
    const joke = await GetJoke(value);
    dispatch(setSuccessJoke(joke));
  } catch (error) {
    dispatch(setFailedJoke(error as string));
  }
};
