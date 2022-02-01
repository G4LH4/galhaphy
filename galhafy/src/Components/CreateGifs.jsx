import React, { useEffect, useState } from "react";
import fetchApi from "../Services/Index";
import { motion } from "framer-motion";

const CreateGifs = ({ topic, limit, searchStyle }) => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const getGifs = await fetchApi({
        topic,
        limit,
        searchStyle,
      });

      const url = getGifs.map((gif) => {
        return gif.images.downsized_medium.url;
      });

      setGifs(url);
    };

    fetchData();
  }, [setGifs]);

  return (
    <div id={`${topic}-gifs`} className=" text-left mt-20">
      <h3 className="text-2xl 0 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
        {topic}
      </h3>

      <div
        id="gifs"
        className=" bg-zinc-900 w-5/6 p-10  rounded-xl mx-auto mt-10 border-2   border-gray-600"
      >
        {gifs.map((gif, i) => {
          return (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              key={i}
              className="mt-10 ml-10 w-3/12 inline-block "
            >
              <img src={gif} className="rounded-xl" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default CreateGifs;
