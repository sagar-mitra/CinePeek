import { useState } from "react";
import Cast from "./Cast";

const CastSection = ({ castInfo }) => {
  const [visible, setVisible] = useState(5|| 8);

  const handleSeeMore = () => {
    visible === 5 || visible === 8 ? setVisible(castInfo.length - 1) : setVisible(5||8);
  };

  return (
    <div className="mt-6 sm:mt-8 lg:mt-10">
      <h2 className="text-[1rem] sm:text-[1.1rem] lg:text-[1.3rem] xl:text-[1.4rem]  font-bold  w-fit border-b border-[var(--text-highlight)] pb-1 tracking-wide uppercase">
        Cast
      </h2>
      <Cast castInfo={castInfo} visible={visible} />
      <button
        className="w-full py-1 text-center mt-2 hover:text-[var(--text-highlight)]"
        onClick={handleSeeMore}
      >
        <span className="text-sm md:text-base hover:border-b transition-all duration-300 cursor-pointer">
          {visible === 5 || visible === 8 ? "See More" : "See Less"}
        </span>
      </button>
    </div>
  );
};

export default CastSection;
