import axios from "axios";

export const GetJoke = async (value: string) => {
  if (value === "random") {
    const response = await axios.get(`https://api.chucknorris.io/jokes/random`);
    return response.data;
  } else {
    const response = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${value}`
    );
    return response.data;
  }
};

export const GetCategories = async () => {
  const response = await axios.get(
    `https://api.chucknorris.io/jokes/categories`
  );
  return response.data;
};
