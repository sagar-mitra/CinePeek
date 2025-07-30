import { FaStar } from "react-icons/fa";


const HeadingSection = ({ details }) => {
  const { title, vote_average, runtime, release_date } = details;

  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  return (
    <div className="flex items-start justify-between gap-2 ">
      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl tracking-wide font-(family-name:--font-archivo)">
          {title}
        </h1>
        <span className="flex gap-1 text-[var(--text-secondary)] text-xs sm:text-sm lg:text-lg lg:pl-0.5 lg:pt-2">
          <p>{release_date.slice(0, 4)} |</p>
          <p>{`${hours}h ${minutes}m`}</p>
        </span>
      </div>
      <div className="flex items-center gap-1 pt-2 lg:pt-3">
        <FaStar className=" text-amber-300 sm:text-lg lg:text-xl xl:text-2xl" />
        <span className="sm:text-lg lg:text-xl xl:text-2xl">
          {Number(vote_average).toFixed(1)}
        </span>
      </div>
    </div>
  );
};

export default HeadingSection;
