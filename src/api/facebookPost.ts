import axios from "axios";

export const postToFacebook = async (message: string) => {
  const accessToken =
    "EAAOPUy8T8dsBOZBZADw41fCWZBw8GBuuM4f66tkm2MhYxOO86rSa36Yvf0yToZC1lk8K893qgZAKEAlmr4moj2LgqjXgIjrD5Soo42ZCS45qgHOiFHZBa0ZAGJ4ptPAfO4QgYv7Up3fgAbZAHPOSMdZBGqlz2HIpZC3IZAJAIO6xKMy7L9jJ5RM51QyBQGQ4i2xEBSwh";
  const pageId = "488062707724033";

  const formData = new FormData();
  formData.append("message", message);
  formData.append("access_token", accessToken);
  const response = await axios.post(
    `https://graph.facebook.com/v12.0/${pageId}/feed`,
    formData
  );

  return response.data;
};