import React, { useEffect, useState } from "react";
import fetchApi from "../Services/Index";
import { motion } from "framer-motion";
import LoadingWheel from "../img/Loading.svg";

const CreateGifs = ({ topic, limit, searchStyle }) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const getGifs = await fetchApi({
        topic,
        limit,
        searchStyle,
      });

      setIsLoading(false);
      setGifs(getGifs);
    };

    fetchData();
  }, [setGifs]);

  return (
    <div id={`${topic}-gifs`} className="mx-auto mt-20 text-left ">
      <h3 className="text-2xl font-extrabold text-transparent 0 bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
        {`${topic} gifs`}
      </h3>

      <div id="gifs" className="p-10 mx-auto mt-10 border-2 border-gray-600 ">
        {isLoading ? (
          <img src={LoadingWheel} className="mx-auto" />
        ) : (
          <div>
            {gifs.map((gif, i) => (
              <GifMotion gif={gif} key={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const useCopied = () => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      const timer1 = setTimeout(() => setIsCopied(false), 2000);
      return () => {
        clearTimeout(timer1);
      };
    }
  }, [isCopied]);

  return [isCopied, setIsCopied];
};

const GifMotion = ({ gif }) => {
  const [isCopied, setIsCopied] = useCopied();

  const handleClick = async () => {
    console.log("Is copied");

    await navigator.clipboard.writeText(gif.gifUrl);

    setIsCopied(true);
  };

  return (
    <>
      {isCopied && <p className="text-red-500">test</p>}

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mx-auto mt-10 ml-10 "
      >
        <img
          onClick={handleClick}
          src={gif.img}
          className="w-10/12 mx-auto mt-20 rounded cursor-pointer"
        />
      </motion.div>
    </>
  );
};

export default CreateGifs;
