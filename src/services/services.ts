import axios from "axios";

export const GetJoke = async (value: string) => {
  const response = await axios.get(
    `https://api.chucknorris.io/jokes/random?category=${value}`
  );
  return response.data;
};
