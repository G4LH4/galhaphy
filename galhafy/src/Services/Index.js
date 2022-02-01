import { API_KEY } from "../../config.js";

const fetchApi = async ({ limit, topic, searchStyle }) => {
  const defaultUrl = `https://api.giphy.com/v1/gifs/${searchStyle}?api_key=${API_KEY}&q=${topic}&limit=${limit}&offset=0&rating=g&lang=en`;

  const fetchUrl = await fetch(defaultUrl);

  const dataJson = await fetchUrl.json();

  if (dataJson.meta.status === 200) {
    return dataJson.data.map((data) => {
      return {
        title: data.title,
        img: data.images.downsized_medium.url,
        gifUrl: data.url,
      };
    });
  }
};

export default fetchApi;
