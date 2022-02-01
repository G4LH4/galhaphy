const fetchApi = async ({ limit, topic, searchStyle }) => {
  const defaultUrl = `https://api.giphy.com/v1/gifs/${searchStyle}?api_key=jO5uqF1JUehQmpyX80wvqao249B9YIfo&q=${topic}&limit=${limit}&offset=0&rating=g&lang=en`;

  const fetchUrl = await fetch(defaultUrl);

  const dataJson = await fetchUrl.json();

  if (dataJson.meta.status === 200) {
    return dataJson.data;
  }
};

export default fetchApi;
