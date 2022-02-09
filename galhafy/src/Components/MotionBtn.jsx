import React from "react";
import { motion } from "framer-motion";

const MotionBtn = ({ title, fn, addClass }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={fn}
      className={`${addClass} p-1  -ml-24 text-xl text-white rounded bg-gradient-to-br from-pink-400 to-red-600`}
    >
      {title}
    </motion.button>
  );
};

export default MotionBtn;
