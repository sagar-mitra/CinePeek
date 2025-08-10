import useImage from "../../hooks/useImage";
import { IMAGE_URL } from "../../utils/constants";
import { useState } from "react";

const MovieImagesSection = ({ type, id }) => {
  const [visible, setVisible] = useState(6);

  const images = useImage(type, id);
  if (images.length <= 0) return;

  const { backdrops } = images;

  const handleSeeMore = () => {
    visible === 6 ? setVisible(backdrops.length - 1) : setVisible(6);
  };

  return (
    <div>
      <h1 className="text-[1rem] sm:text-[1.1rem] lg:text-[1.3rem] xl:text-[1.4rem]  font-bold w-fit border-b border-[var(--text-highlight)] pb-1 tracking-wide uppercase">
        Images
      </h1>

      {/* Grid Layout: 2 on mobile, 3 on tablet, 4 on laptop+ */}
      <div
        className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-5 pt-2 sm:pt-3 lg:pt-6`}
      >
        {backdrops.slice(0, visible).map((item, idx) => {
          return idx === 5 && visible === 6 ? (
            <span key={idx} className="relative">
              <img
                src={IMAGE_URL + item.file_path}
                className="rounded-lg w-full object-cover"
              />
              <p className="text-gray-800 font-bold text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-gray-50/50 w-full h-full rounded-lg">
                +{backdrops.length - 7}
              </p>
            </span>
          ) : (
            <img
              key={idx}
              src={IMAGE_URL + item.file_path}
              className="rounded-lg w-full object-cover"
            />
          );
        })}
      </div>

      {/* See More Button */}
      <button
        className="w-full py-1 text-center mt-2 hover:text-[var(--text-highlight)]"
        onClick={handleSeeMore}
      >
        <span className="text-sm md:text-base hover:border-b transition-all duration-300 cursor-pointer">
          {backdrops.length < 6 ? "" : visible === 6 ? "See More" : "See Less"}
  
        </span>
      </button>
    </div>
  );
};

export default MovieImagesSection;
