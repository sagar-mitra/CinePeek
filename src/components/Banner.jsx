import { useSelector } from "react-redux";
import BannerItem from "./BannerItem";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Banner = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const bannerData = useSelector((store) => store.cinepeek.bannerData);

  const handleLeft = () => {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    }
  };

  const handleRight = () => {
    if (imageIndex < bannerData.length - 1) {
      setImageIndex(imageIndex + 1);
    }
  };

  // Automatic slide
  useEffect(() => {
    const interval = setInterval(() => {
      if (imageIndex < bannerData.length - 1) {
        handleRight();
      } else {
        setImageIndex(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [imageIndex]);

  return (
    bannerData.length !== 0 && (
      <section className="max-w-screen">
        <div className="flex w-full h-full overflow-hidden">
          {bannerData.map((item, idx) => {
            return (
              idx === imageIndex && (
                <BannerItem
                  key={item.id}
                  item={item}
                  handleRight={handleRight}
                  handleLeft={handleLeft}
                />
              )
            );
          })}
        </div>
      </section>
    )
  );
};

export default Banner;
