
const OverviewSection = ({ details, castInfo, director }) => {
  const { overview, genres } = details;
  
  return (
    <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-col gap-2 sm:gap-3 lg:gap-4">
      <h2 className="text-[1rem] sm:text-[1.1rem] lg:text-[1.3rem] xl:text-[1.4rem] font-bold  w-fit border-b border-[var(--text-highlight)] pb-1 tracking-wide uppercase">
        Details
      </h2>
      <p className="text-[0.8rem] sm:text-[0.9rem] lg:text-[1rem] leading-[1.3rem] sm:leading-[1.5rem] lg:leading-[1.6rem] tracking-[0.007rem] ">
        {overview}
      </p>
      <div className="tracking-[0.007rem] flex flex-col gap-2 lg:gap-3">
        <div className="flex">
          <span className="tracking-wide text-[var(--text-secondary)] text-[0.8rem] sm:text-[0.9rem] lg:text-[1rem]  mr-1">
            Starring:
          </span>
          <p>
            {castInfo.slice(0, 3).map((cast, idx) => (
            <span key={cast.id} className="text-[0.8rem] sm:text-[0.9rem] lg:text-[1rem]">
              {cast.name} {idx !== castInfo.slice(0, 3).length - 1 && ","}{" "}
            </span>
          ))}
          </p>
        </div>
        <p className="tracking-wide text-[var(--text-secondary)] text-[0.8rem] sm:text-[0.9rem] lg:text-[1rem] ">
          Director:{" "}
          <span className="text-[0.8rem] sm:text-[0.9rem] lg:text-[1rem]  text-[var(--text-primary)]">
            {director.length > 0 && director[0].name}
          </span>
        </p>
        <p>
          <span className="tracking-wide text-[var(--text-secondary)] text-[0.8rem] sm:text-[0.9rem] lg:text-[1rem] ">
            Genres:{" "}
          </span>
          {genres.map((item, idx) => (
            <span key={item.id} className="text-[0.8rem] sm:text-[0.9rem] lg:text-[1rem]">
              {item.name}
              {idx !== genres.length - 1 && ","}{" "}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default OverviewSection;
