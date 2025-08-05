import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Mousewheel } from "swiper/modules";
import Card from "./Common/card";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HorizontalScrollCard = ({ data, heading, type }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  // const handlePrevious = () => {
  //   containerRef.current.scrollLeft -= 500;
  // };

  // const handleNext = () => {
  //   containerRef.current.scrollLeft += 500;
  // };

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.params) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    data && (
      <div className="lg:mt-5 px-7 md:px-10 md:pt-7 pt-10 relative  min-h-[240px] max-h-[240px] sm:min-h-[320px] sm:max-h-[320px] md:min-h-[330px] md:max-h-[330px] lg:min-h-[360px] lg:max-h-[360px] group">
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
        <Swiper
          className="!px-3 !py-6"
          modules={[Navigation, Mousewheel, Scrollbar]}
          mousewheel={{ forceToAxis: true }} // ✅ Horizontal scroll support
          allowTouchMove= {true}
          navigation={false} // disable default navigation
          scrollbar={{ draggable: true }}
          slidesPerGroup={3} // move 3 slides per click
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            320: { slidesPerView: 3, spaceBetween: 90 }, // Mobile
            360: { slidesPerView: 3, spaceBetween: 50 }, // Mobile
            400: { slidesPerView: 3, spaceBetween: 20 }, // Mobile
            600: { slidesPerView: 4, spaceBetween: 30 }, // Tablet
            800: { slidesPerView: 5, spaceBetween: 90 }, // Tablet
            1024: { slidesPerView: 5, spaceBetween: 30 }, // Desktop
            1200: { slidesPerView: 6, spaceBetween: 30 }, // Desktop
            1400: { slidesPerView: 7, spaceBetween: 20 }, // Desktop
          }}
        >
          {data.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <Card data={item} type={type} />
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Previous and Next Button */}
        <div className="absolute top-1/2 py-8 left-0 right-0 hidden group-hover:lg:flex justify-between w-full px-1 sm:px-2 lg:px-3 text-lg ">
          <button ref={prevRef} className="cursor-pointer">
            <FaAngleLeft />
          </button>
          <button ref={nextRef} className="cursor-pointer">
            <FaAngleRight />
          </button>
        </div>
      </div>
    )
  );
};

export default HorizontalScrollCard;
