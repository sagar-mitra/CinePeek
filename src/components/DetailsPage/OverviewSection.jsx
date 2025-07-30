
const OverviewSection = ({ details, castInfo, director }) => {
  const { overview, genres } = details;
  return (
    <div className="mt-5 flex flex-col gap-2 sm:gap-3 lg:gap-4 lg:pt-4 ">
      <h2 className="text-lg sm:text-xl lg:text-xl xl:text-2xl font-bold  w-fit border-b border-[var(--text-highlight)] pb-1 tracking-wide uppercase">
        Details
      </h2>
      <p className="text-sm sm:text-base lg:text-lg leading-loose tracking-[0.007rem] ">
        {overview}
      </p>
      <div className="tracking-[0.007rem] flex flex-col gap-2 lg:gap-3">
        <div className="flex">
          <span className="tracking-wide text-[var(--text-secondary)] sm:text-lg mr-1">
            Starring:
          </span>
          <p>
            {castInfo.slice(0, 3).map((cast, idx) => (
            <span key={cast.id} className="text-sm sm:text-base lg:text-[17px]">
              {cast.name} {idx !== castInfo.slice(0, 3).length - 1 && ","}{" "}
            </span>
          ))}
          </p>
        </div>
        <p className="tracking-wide text-[var(--text-secondary)] sm:text-lg">
          Director:{" "}
          <span className="text-sm sm:text-base lg:text-[17px] text-[var(--text-primary)]">
            {director[0].name}
          </span>
        </p>
        <p>
          <span className="tracking-wide text-[var(--text-secondary)] sm:text-lg">
            Genres:{" "}
          </span>
          {genres.map((item, idx) => (
            <span key={item.id} className="text-sm sm:text-base lg:text-[17px]">
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
