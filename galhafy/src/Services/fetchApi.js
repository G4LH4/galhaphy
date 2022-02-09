import { API_KEY } from "../../config.js";

const URL_BASE = "https://api.giphy.com/v1/gifs/";
const getUrl = ({ limit, topic, searchStyle }) =>
  `${URL_BASE}${searchStyle}?api_key=${API_KEY}&q=${topic}&limit=${limit}&offset=0&rating=g&lang=en`;

const mapItem = (item) => {
  return {
    title: item?.title,
    img: item?.images.downsized_medium.url,
    gifUrl: item?.url,
  };
};

const fetchApi = async (params) => {
  try {
    const defaultUrl = getUrl(params);

    const fetchUrl = await fetch(defaultUrl);

    const { meta, data } = await fetchUrl.json();

    if (meta.status !== 200) throw new Error(meta.msg);

    if (data.length === 0) throw new Error("204");

    const res = data.map(mapItem);

    return [res, null];
  } catch (error) {
    return [null, error];
  }
};

export default fetchApi;
