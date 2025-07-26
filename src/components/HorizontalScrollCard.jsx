import Card from "./Common/card";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { useRef } from "react";

const HorizontalScrollCard = ({ data, heading, type }) => {
  const containerRef = useRef();

  const handlePrevious = () => {
    containerRef.current.scrollLeft -= 500;
  }

  const handleNext = () => {
    containerRef.current.scrollLeft += 500;
  }

  return (
    data && (
      <div className="px-7 md:px-10 md:pt-7 pt-10 relative  min-h-[240px] max-h-[240px] sm:min-h-[320px] sm:max-h-[320px] md:min-h-[330px] md:max-h-[330px] lg:min-h-[360px] lg:max-h-[360px] group">
        {/* Heading  */}
        <div className="flex justify-between items-center mb-2 md:mb-4">
          <h1 className="text-sm tracking-wide sm:text-base lg:text-lg font-medium ">
            {heading}
          </h1>
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-0.5 cursor-pointer text-red-500"
          >
            <p className="font-medium text-xs sm:text-sm tracking-wide">
              See All
            </p>
            <div whileHover={{ scale: 1.02 }}>
              <FiArrowRight className="font-bold text-sm sm:text-lg" />
            </div>
          </motion.div>
        </div>

        {/* Movie Cards  */}
        <div
          ref={containerRef}
          className="relative z-20 grid grid-cols-[repeat(auto-fill, _minmax(110px,_180px))] grid-flow-col gap-3 lg:gap-5 overflow-x-auto scrollbar-hide scroll-smooth transition-all duration-700    "
        >
          {data.map((item) => {
            return <Card key={item.id} data={item} type={type}/>;
          })}
        </div>

        {/* Previous and Next Button */}
        <div className="absolute top-1/2 left-0 right-0 hidden group-hover:lg:flex justify-between w-full px-1 sm:px-2 lg:px-3 text-lg ">
          <button className="cursor-pointer" onClick={handlePrevious}>
            <FaAngleLeft />
          </button>
          <button className="cursor-pointer" onClick={handleNext}>
            <FaAngleRight />
          </button>
        </div>
      </div>
    )
  );
};

export default HorizontalScrollCard;
