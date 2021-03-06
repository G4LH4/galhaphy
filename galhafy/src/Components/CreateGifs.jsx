import React, { useEffect, useState } from "react";
import { fetchApi } from "../Services/Index";
import { motion } from "framer-motion";
import LoadingWheel from "../img/Loading.svg";
import ErrorStatus from "./ErrorStatus";
import InexistentGif from "../img/204.gif";

const useGifs = ({ topic, limit, searchStyle }) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [isError, setIsError] = useState({
    wasAnError: false,
    errorMSG: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const [gifsData, error] = await fetchApi({
        topic,
        limit,
        searchStyle,
      });

      if (error) {
        setIsError({
          wasAnError: true,
          errorMSG: error ?? { message: "No gifs found" },
        });
      } else {
        setGifs(gifsData);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [topic, limit, searchStyle]);

  return {
    gifs,
    isLoading,
    isError,
  };
};

const CreateGifs = ({ topic, limit, searchStyle }) => {
  const { gifs, isLoading, isError } = useGifs({
    topic,
    limit,
    searchStyle,
  });

  return isError.wasAnError ? (
    <ErrorStatus title={isError.errorMSG.message} src={InexistentGif} />
  ) : (
    <div id={`${topic}-gifs`} className="mx-auto mt-20 text-left ">
      <h3 className="text-2xl font-extrabold text-transparent 0 bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
        {`${topic} gifs`}
      </h3>

      <div id="gifs" className="p-10 mx-auto mt-10 border-2 border-pink-500">
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

const ClickedSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-1/6 mx-auto mt-12 text-center bg-green-500 rounded-xl"
    >
      <h3 className="text-black">Copied</h3>
    </motion.div>
  );
};

const GifMotion = ({ gif }) => {
  const [isCopied, setIsCopied] = useCopied();
  const miStorage = window.localStorage;

  const handleClick = () => {
    navigator.clipboard.writeText(gif.gifUrl);

    setIsCopied(true);

    miStorage.setItem("lastSearch", gif.gifUrl);
  };

  return (
    <>
      {isCopied && <ClickedSection />}

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mx-auto "
      >
        <img
          onClick={handleClick}
          src={gif.img}
          className="w-10/12 mx-auto mt-20 border-2 border-pink-500 rounded cursor-pointer"
        />
      </motion.div>
      <div className="mt-10 text-center ">
        <h3>{gif.title}</h3>
      </div>
    </>
  );
};

export default CreateGifs;
