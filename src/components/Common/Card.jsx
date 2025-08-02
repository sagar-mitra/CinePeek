import React, { useState } from "react";
import { IMAGE_URL } from "../../utils/constants";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Card = ({ data, type }) => {
  const navigate = useNavigate();
  const { poster_path, title, id, name } = data;

  return (
    <motion.div
      className="w-full min-w-[110px] max-w-[110px] sm:min-w-[150px]  sm:max-w-[160px] lg:min-w-[180px] lg:max-w-[180px] h-full min-h-[159px]  max-h-[159px] sm:min-h-[225px] sm:max-h-[225px] lg:min-h-[250px] lg:max-h-[250px] mb-3.5 object-bottom rounded-lg relative cursor-pointer"
      onClick={() => navigate(`details/${type}/${title || name}/${id}`)}
      whileHover={{ y: -10, scale: 1.06 }}
    >
      <motion.div className="w-full h-full ">
        <motion.img
          className="w-full h-full  max-sm:object-bottom rounded-lg"
          src={IMAGE_URL + poster_path}
          alt={title}
        />
      </motion.div>
    </motion.div>
  );
};

export default Card;
