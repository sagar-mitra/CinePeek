import React from "react";
import Card from "./Common/card";
import { FiArrowRight } from "react-icons/fi";
import { motion, scale } from "framer-motion";

const HorizontalScrollCard = ({ data, heading }) => {
  return (
    <div className="px-7 md:px-10 md:mt-7 mt-10 ">
      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-2 md:mb-4">
          {heading}
        </h1>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill, _minmax(230px,_300px))] grid-flow-col gap-3 lg:gap-5 overflow-x-auto ">
        {data.map((item) => {
          return <Card key={item.id} data={item} />;
        })}
        <motion.div className="flex w-[130px] h-ful min-h-[320px]  max-h-[330px] sm:min-h-[340px] sm:max-h-[340px] items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.06 }}
            whileTap={{scale: 0.9}}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <p className="font-medium">See All</p>
            <div whileHover={{ scale: 1.02 }}>
              <FiArrowRight className="font-medium" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HorizontalScrollCard;
