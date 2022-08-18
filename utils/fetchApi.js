import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  console.log(import.meta.env.VITE_RAPID_API_KEY)
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
    },
  });

  return data;
};
