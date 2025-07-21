import React, { useState } from "react";
import { IMAGE_URL } from "../../utils/constants";
import { motion } from "framer-motion";

const Card = ({ data }) => {
  const { poster_path, title, backdrop_path } = data;

  return (
    <motion.div className="w-full h-full relative cursor-pointer">
      <motion.div
        className=" w-full max-w-[240px] min-w-[230px] sm:max-w-[300px] h-full min-h-[320px]  max-h-[330px] sm:min-h-[340px] sm:max-h-[340px] mb-3.5 overflow-hidden object-bottom rounded-lg"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <motion.img
          whileHover={{ scale: 1.09 }}
          whileTap={{scale: 0.9}}
          transition={{ duration: 0.4 }}
          className="w-full h-full  max-sm:object-bottom "
          src={IMAGE_URL + poster_path}
          alt={title}
        />
      </motion.div>
    </motion.div>
  );
};

export default Card;
