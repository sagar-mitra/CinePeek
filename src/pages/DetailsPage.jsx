import { useNavigate, useParams } from "react-router-dom";
import useMovieInfo from "../hooks/useMovieInfo";
import { DEFAULT_PP, IMAGE_URL } from "../utils/constants";
import { FaStar } from "react-icons/fa";
import { div, span } from "framer-motion/client";
import useCastDetails from "../hooks/useCastDetails";
import useImage from "../hooks/useImage";
import Cast from "../components/Cast";
import { useState } from "react";

const DetailsPage = () => {
  const [visible, setVisible] = useState(8);

  // Destructuring the query
  const { type, title, id } = useParams();
  const navigate = useNavigate();

  const details = useMovieInfo(type, id);

  const { castInfo, director } = useCastDetails(type, id);

  useImage();

  // const {castInfo, director} = data

  if (!details || !castInfo || !director) return;

  // Destructure the details
  const {
    overview,
    production_companies,
    poster_path,
    backdrop_path,
    genres,
    vote_average,
    runtime,
    release_date,
  } = details;

  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  const handleSeeMore = () => {
    visible === 8 ? setVisible(castInfo.length - 1) : setVisible(8);
  };

  return (
    <div className="pt-20 sm:pt-16 lg:pt-22 max-w-screen min-h-screen text-white px-4 sm:px-8 border border-red-500">
      {/* Back Button  */}

      <div className="grid gap-5 lg:grid-cols-[1fr_2fr] xl:grid-cols-[1fr_1.7fr]">
        {/* Movie Poster & Watch Trailer Button  */}
        <div className="w-full lg:w- flex flex-col items-center justify-center">
          <img
            src={IMAGE_URL + poster_path}
            alt={title}
            className="rounded-lg max-h-[400px] xs:max-h-[460px] lg:max-h-[600px] xl:max-h-[700px] mb-7"
          />
          <button
            className="text-[15px] w-[270px] xs:w-[300px] lg:w-full xl:w-[470px] md:text-base shadow-md py-4 md:px-6 md:py-3 lg:px-9 lg:py-4 lg:font-semibold lg:text-base rounded font-medium tracking-wide bg-[#cc001f]/90 text-[var(--text-primary)] cursor-pointer"
            onClick={() => navigate(`/player/${id}/${title}`)}
          >
            Watch Trailer
          </button>
        </div>

        {/* Movie Info  */}
        <div className="sm:px-12 lg:px-1">
          {/* Heading Section */}
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

          {/* Details Info Section */}
          <div className="mt-5 flex flex-col gap-2 sm:gap-3 lg:gap-4 lg:pt-4 ">
            <h2 className="text-lg sm:text-xl lg:text-xl xl:text-2xl font-bold  w-fit border-b border-[var(--text-highlight)] pb-1 tracking-wide uppercase">
              Details
            </h2>
            <p className="text-sm sm:text-base lg:text-lg leading-loose tracking-[0.007rem] ">
              {overview}
            </p>
            <div className="tracking-[0.007rem] flex flex-col gap-2 lg:gap-3">
              <p>
                <span className="tracking-wide text-[var(--text-secondary)] sm:text-lg">
                  Starring:{" "}
                </span>
                {castInfo.slice(0, 3).map((cast, idx) => (
                  <span
                    key={cast.id}
                    className="text-sm sm:text-base lg:text-[17px]"
                  >
                    {cast.name} {idx !== castInfo.slice(0, 3).length - 1 && ","}{" "}
                  </span>
                ))}
              </p>
              <p className="tracking-wide text-[var(--text-secondary)] sm:text-lg">
                  Director:{" "} 
                <span className="text-sm sm:text-base lg:text-[17px] text-[var(--text-primary)]" >
                  { director[0].name}
                </span>
              
              </p>
              <p>
                <span className="tracking-wide text-[var(--text-secondary)] sm:text-lg">
                  Genres:{" "}
                </span>
                {genres.map((item, idx) => (
                  <span
                    key={item.id}
                    className="text-sm sm:text-base lg:text-[17px]"
                  >
                    {item.name}
                    {idx !== genres.length - 1 && ","}{" "}
                  </span>
                ))}
              </p>
            </div>
          </div>

          {/* Cast Section  */}
          <div className=" mt-5">
            <h2 className="text-lg sm:text-xl lg:text-xl xl:text-2xl font-bold  w-fit border-b border-[var(--text-highlight)] pb-1 tracking-wide uppercase" >Cast</h2>
            <Cast castInfo={castInfo} visible={visible} />
            <button className="w-full py-1 text-center mt-2 hover:text-[var(--text-highlight)]" 
            onClick={handleSeeMore}>
              <span className="hover:border-b transition-all duration-300 cursor-pointer">{visible === 8 ? "See More" : "See Less"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
