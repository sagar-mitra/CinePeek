import { IMAGE_URL } from "../utils/constants";
import { motion } from "framer-motion";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

const BannerItem = ({ item, handleRight, handleLeft, imageIndex, length }) => {
  const { backdrop_path, overview, title } = item;
  return (
    item && (
      <div className="min-w-full h-full xl:min-h-screen max-h-[900px] relative group transition-all duration-700 ">
        {/* Banner Image  */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.3 }}
          className="w-full h-full border-b border-[var(--main-color)]"
        >
          <motion.img
            className="w-full max-h-full min-h-[450px] md:min-h-[600px] lg:max-h-screen object-cover object-top  "
            src={IMAGE_URL + backdrop_path}
            alt={title}
          />
        </motion.div>

        {/* black overlay */}
          <div className="absolute top-0 w-full h-full bg-gradient-to-t from-[var(--main-color)] to-transparent " />
        

        {/* Left and Right Pointers */}
        <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:hidden justify-between px-5 cursor-pointer z-20 sm:group-hover:flex ">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.6, transition: { duration: 0.5 } }}
            className={`${imageIndex === 0 && "invisible"}`}
          >
            <FaAngleLeft
              className="lg:text-3xl text-white/70 hover:text-white/90 transition-colors duration-300"
              onClick={handleLeft}
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.8, transition: { duration: 0.5 } }}
            className={`${imageIndex === length && "invisible"}`}
          >
            <FaAngleRight
              className="lg:text-3xl text-white/70 hover:text-white/90 transition-colors duration-300"
              onClick={handleRight}
            />
          </motion.div>
        </div>

        {/* movie info  */}
          <div className="container mx-auto absolute top-1/2 left-1/2 -translate-x-1/2   max-sm:pl-3 max-lg:pl-2 lg:pl-20">
            {/* movie logo  */}
            {/* <img
          className="h-10 sm:h-15 md:h-20  lg:w-2xl object-contain object-left"
          src={IMAGE_URL + logo}
          alt=""
        /> */}

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold"
            >
              {title}
            </motion.h1>

            {/* movie desc  */}
            <p className="w-56 sm:w-80 md:w-md lg:5/12 text-[10px] md:text-base text-ellipsis line-clamp-2 pl-1 tracking-wide text-[var(--text-muted)] leading-3 md:leading-4 lg:leading-5 mt-2 md:mt-4">
              {overview}
            </p>

            {/* play and more info button  */}
            <div className="mt-2 md:mt-4 ml-1 flex gap-2">
              <motion.button className="text-[7px] md:text-sm px-2 py-0.5 shadow-md md:px-6 md:py-2 lg:px-9 lg:py-4 lg:font-semibold lg:text-base rounded font-medium tracking-wide bg-neutral-100 text-[var(--main-color)] flex items-center cursor-pointer">
                <i className="bx  bx-play text-sm md:text-xl"></i>
                <span>Play</span>
              </motion.button>
              <button className="text-[7px] md:text-sm px-2 shadow-md py-0.5 md:px-6 md:py-2 lg:px-9 lg:py-4 lg:text-base lg:font-semibold rounded font-medium tracking-wide bg-neutral-100/60 text-[var(--main-color)] flex items-center gap-1 cursor-pointer">
                <i className="bx  bx-info-circle text-sm md:text-xl"></i>
                <span>More Info</span>
              </button>
            </div>
          </div>
        
      </div>
    )
  );
};

export default BannerItem;
