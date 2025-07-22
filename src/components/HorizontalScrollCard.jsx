import React from "react";
import Card from "./Common/card";
import { FiArrowRight } from "react-icons/fi";
import { motion, scale } from "framer-motion";

const HorizontalScrollCard = ({ data, heading }) => {
  if(!data) return
  return (
    data && (
      <div className="px-7 md:px-10 md:pt-7 pt-10">
        <div className="flex justify-between items-center mb-2 md:mb-4">
          <h1 className="text-lg tracking-wide sm:text-2xl lg:text-3xl font-medium ">
            {heading}
          </h1>
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-0.5 cursor-pointer text-red-500"
          >
            <p className="font-medium text-sm sm:text-base tracking-wide">
              See All
            </p>
            <div whileHover={{ scale: 1.02 }}>
              <FiArrowRight className="font-bold text-sm sm:text-lg" />
            </div>
          </motion.div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill, _minmax(230px,_300px))] grid-flow-col gap-3 lg:gap-5 overflow-x-auto ">
          {data.map((item) => {
            return <Card key={item.id} data={item} />;
          })}
        </div>
      </div>
    )
  );
};

export default HorizontalScrollCard;
