import useGetLogo from "../hooks/useGetLogo";
import { IMAGE_URL } from "../utils/constants";
import { motion } from "framer-motion";

const BannerItem = ({ item, handleRight, handleLeft }) => {
  const logo = useGetLogo(item.id);
  if (!logo) return;
  console.log(item);

  // console.log(logo);

  const { backdrop_path, overview, title } = item;
  return (
    <div className="min-w-full min-h-full relative group transition-all duration-700">
      <div className="w-full h-full">
        <img
          className="w-screen max-h-full min-h-[450px] md:min-h-[600px] lg:max-h-screen object-cover object-top  "
          src={IMAGE_URL + backdrop_path}
          alt=""
        />
      </div>

      {/* black overlay */}
      <div className="absolute top-0 w-full h-full bg-gradient-to-t from-[var(--main-color)] to-transparent" />

      <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:hidden justify-between px-5 cursor-pointer z-20 sm:group-hover:flex ">
        <i className='bx  bx-chevron-left lg:text-6xl text-white/70 hover:text-white/90 transition-colors duration-300' onClick={handleLeft} ></i> 
        <i className='bx  bx-chevron-right lg:text-6xl text-white/70 hover:text-white/90 transition-colors duration-300' onClick={handleRight}></i> 
      </div>

      {/* movie info  */}
      <div className="container mx-auto absolute top-1/2 left-1/2 -translate-x-1/2   max-sm:pl-3 max-lg:pl-2 lg:pl-20">
        {/* movie logo  */}
        {/* <img
          className="h-10 sm:h-15 md:h-20  lg:w-2xl object-contain object-left"
          src={IMAGE_URL + logo}
          alt=""
        /> */}

        <h1 className="text-6xl font-bold">{title}</h1>

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
  );
};

export default BannerItem;
