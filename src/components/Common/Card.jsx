import React, { useState } from "react";
import { IMAGE_URL } from "../../utils/constants";
import { motion } from "framer-motion";

const Card = ({ data }) => {
  const { poster_path, title, backdrop_path } = data;

  return (
    <motion.div className="w-full min-w-[110px] max-w-[110px] sm:min-w-[179px]  sm:max-w-[179px] h-full min-h-[159px]  max-h-[159px] sm:min-h-[245px] sm:max-h-[245px] lg:min-w-[260px] lg:max-w-[260] lg:min-h-[370px] lg:max-h-[370px] mb-3.5 overflow-hidden object-bottom rounded-lg relative cursor-pointer">
      <motion.div
        whileHover={{ scale: 1.09 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.4 }}
        className="w-full h-full "
      >
        <motion.img
          className="w-full h-full  max-sm:object-bottom "
          src={IMAGE_URL + poster_path}
          alt={title}
        />
      </motion.div>
    </motion.div>
  );
};

export default Card;
