import axios from "axios";

export const postToFacebook = async (message: string) => {
  const pageId = "488062707724033";

  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
  const formData = new FormData();
  formData.append("message", message);
  formData.append("access_token", API_KEY);
  const response = await axios.post(
    `https://graph.facebook.com/v12.0/${pageId}/feed`,
    formData
  );

  return response.data;
};
