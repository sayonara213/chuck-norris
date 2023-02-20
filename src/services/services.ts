import axios from "axios";
import { IJoke } from "../models/IJoke";

export const GetJoke = async (value: string) => {
  if (value === "random") {
    const { data } = await axios.get(`https://api.chucknorris.io/jokes/random`);
    return data;
  }
  const { data } = await axios.get<IJoke>(
    `https://api.chucknorris.io/jokes/random?category=${value}`
  );
  return data;
};

export const GetCategories = async () => {
  const { data } = await axios.get(
    `https://api.chucknorris.io/jokes/categories`
  );
  return data;
};
