import { useState } from "react";
import Cast from "./Cast";

const CastSection = ({ castInfo }) => {
  const [visible, setVisible] = useState(8);

  const handleSeeMore = () => {
    visible === 8 ? setVisible(castInfo.length - 1) : setVisible(8);
  };

  return (
    <div className="mt-5">
      <h2 className="text-lg sm:text-xl lg:text-xl xl:text-2xl font-bold  w-fit border-b border-[var(--text-highlight)] pb-1 tracking-wide uppercase">
        Cast
      </h2>
      <Cast castInfo={castInfo} visible={visible} />
      <button
        className="w-full py-1 text-center mt-2 hover:text-[var(--text-highlight)]"
        onClick={handleSeeMore}
      >
        <span className="text-sm md:text-base hover:border-b transition-all duration-300 cursor-pointer">
          {visible === 8 ? "See More" : "See Less"}
        </span>
      </button>
    </div>
  );
};

export default CastSection;
