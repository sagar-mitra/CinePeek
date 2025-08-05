import { FaStar } from "react-icons/fa";


const HeadingSection = ({ details }) => {
  const { name, title, vote_average, runtime, release_date } = details;


  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  return (
    <div className="flex items-start justify-between gap-2 ">
      <div>
        <h1 className="text-[1.3rem] sm:text-[1.8rem] lg:text-[2.1rem] xl:text-[2.4rem] tracking-wide font-(family-name:--font-archivo)">
          {title || name}
        </h1>
        <span className="flex gap-1 text-[var(--text-secondary)] text-[0.6rem] sm:text-[0.7rem] lg:text-[0.9rem] lg:pl-0.5">
          <p> {release_date && release_date.slice(0,10)}|</p>
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
