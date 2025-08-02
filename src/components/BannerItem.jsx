import { IMAGE_URL, IMDB_LOGO } from "../utils/constants";
import { motion } from "framer-motion";

import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import useMovieInfo from "../hooks/useMovieInfo";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const BannerItem = ({ item, type, handleRight, handleLeft, imageIndex, length }) => {
  const navigate = useNavigate()


  const {id, backdrop_path, overview, title } = item;
  const movieInfoData = useMovieInfo(type, id);

  // const movieInfoData = useSelector((store) => store.cinepeek.movieInfo);

  if (!movieInfoData) return;

  const { genres, release_date, runtime, vote_average } = movieInfoData;

  const release_year = release_date.split("-")[0];
  const totalMinutes = runtime;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

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
            className="w-full  min-h-[450px] md:min-h-[600px] lg:max-h-screen lg:min-h-screen object-cover object-top  "
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
        <div className="z-22 max-lg:flex flex-col items-center w-[300px] max-w-[300px]  sm:min-w-[440px] sm:max-w-[450px] lg:min-w-[530px]  lg:max-w-[530px] absolute top-1/2 lg:top-1/3 left-1/2 lg:left-30 max-lg:-translate-x-1/2 ">
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
            className="font-(family-name:--font-archivo) text-[var(--text-primary)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-md max-lg:text-center"
        
          >
            {title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="text-[var(--text-secondary)] w-full flex items-center justify-between text-[9px] sm:text-xs md:text-sm px-10 sm:px-14 md:px-11 lg:px-0 lg:pr-38 mt-2 md:mt-4 tracking-tight"
          >
            <div className="flex items-center gap-1 ">
              <img
                className="rounded max-h-3 sm:max-h-4"
                src={IMDB_LOGO}
                alt="imdb_logo"
              />
              <span>{Number(vote_average).toFixed(1)} </span>
            </div>
            <span>•</span>
            <p>{release_year} </p>
            <span>•</span>
            <p>{`${hours}h ${minutes}m`}</p>
            <span>•</span>
            <div className="flex gap-2">
              {genres.slice(0, 2).map((item) => {
                return <span key={item.id}>{item.name} </span>;
              })}
            </div>
          </motion.div>

          {/* movie desc  */}
          <p className="w-56 sm:w-80 md:w-md lg:5/12 text-[10px] md:text-[15px] text-ellipsis line-clamp-3 pl-1 tracking-[-0.2px] text-[var(--text-secondary)] leading-4 md:leading-5 lg:leading-6 mt-2 md:mt-4 max-lg:text-center">
            {overview}
          </p>

          {/* Watch Trailer Button  */}
          <div className="mt-2 md:mt-4 ml-1 flex gap-2  ">
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.04 }}
              transition={{duration: 0.6}}
              className="text-[10px] md:text-base shadow-md px-3 py-2 md:px-6 md:py-3 lg:px-9 lg:py-4 lg:font-semibold lg:text-base rounded font-medium  bg-[#cc001f]/90 text-white flex items-center cursor-pointer "
              onClick={() => navigate(`player/${id}/${title}`)}
            >
              <i className="bx  bx-play text-sm md:text-xl"></i>
              <span>Watch Trailer</span>
            </motion.button>
          </div>
        </div>
      </div>
    )
  );
};

export default BannerItem;
