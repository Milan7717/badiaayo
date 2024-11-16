import axios from "axios";
import api from "../api/instance";
export const getAll = async () => {
  const url = `https://newsapi.org/v2/everything?q=Nepal&floods&apiKey=${
    import.meta.env.VITE_NEWS_API_KEY
  }`;
  const response = await axios.get(url);
  return response.data;
};

//api key
// NEXT_PUBLIC_NEWS_API_KEY=ad4b453afd7449e6a624fa0fd1f329f3

// NEXT_PUBLIC_YOUTUBE_API_KEY=AIzaSyA3hTg7AD4fQomSwk7K57ku6Skkl5d6Iyw
