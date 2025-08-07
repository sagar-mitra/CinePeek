import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Card from "../components/Common/card";

const ExplorePage = () => {
  const { type, list } = useParams();

  const headingList = {
    now_playing: "Trending",
    top_rated: "Top Rated",
    popular: "Popular",
    upcoming: "Upcoming",
  };

  const data = useFetch(type, list);
  const { page, results, total_pages } = data;

  return (
    data.length !== 0 && (
      <div className="bg-[var(--main-color)] pt-20 sm:pt-20 lg:pt-22 max-w-screen min-h-screen text-[var(--text-primary)] px-[1rem] xl:px-[4rem]">
        {/* Heading  */}
        <div className="mb-4 xl:mb-8 xl:px-[2rem]">
          <h1 className="text-[1.5rem] sm:text-[2rem] font-medium">{headingList[list]} {" "}
            {type === "movie" ? "Movies" : "TV Series"}
          </h1>
          <p className="text-[0.7rem] sm:text-[0.9rem] text-[var(--text-muted)]">
            home <span className="px-1">/</span> {type } <span className="px-1">/</span> {" "} {headingList[list].toLocaleLowerCase()}
          </p>
        </div>

        {/* Cards  */}
        <div className="grid grid-cols-2 xs:grid-cols-3  sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[2rem]">
          {results.map((item) => {
            return (
              <div
                key={item.id}
                className="flex flex-col items-center gap-[-3rem] hover:text-[var(--text-highlight)]"
              >
                <Card data={item} type={type} />
                <h1 className="mt-[0.5rem] text-center px-[0.25rem] xl:px-[2rem] text-[0.7rem] md:text-[0.85rem] xl:text-[1rem]">{item.title || item.name}</h1>
              </div>
            );
          })}
        </div>

        {/* Pagination  */}
      </div>
    )
  );
};

export default ExplorePage;
