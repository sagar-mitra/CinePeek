import { useNavigate, useParams } from "react-router-dom";
import useMovieInfo from "../hooks/useMovieInfo";
import { IMAGE_URL } from "../utils/constants";
import { FaStar } from "react-icons/fa";

const DetailsPage = () => {
  // Destructuring the query
  const { type, title, id } = useParams();
  const navigate = useNavigate()

  const details = useMovieInfo(type, id);

  if (!details) return;

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

  const hours = Math.floor(runtime/60);
  const minutes = runtime % 60;

  return (
    <div className="pt-20 sm:pt-16 lg:pt-22 max-w-screen min-h-screen text-white px-4 sm:px-8 border border-red-500">
      {/* Back Button  */}

      <div className="grid gap-5">
        {/* Movie Poster & Watch Trailer Button  */}
        <div className="w-full  flex flex-col items-center justify-center">
          <img
            src={IMAGE_URL + poster_path}
            alt={title}
            className="rounded-lg max-h-[400px] xs:max-h-[460px] mb-7"
          />
          <button className="text-[15px] w-[270px] xs:w-[300px] md:text-base shadow-md py-4 md:px-6 md:py-3 lg:px-9 lg:py-4 lg:font-semibold lg:text-base rounded font-medium tracking-wide bg-[#cc001f]/90 text-[var(--text-primary)] cursor-pointer"
          onClick={() => navigate(`/player/${id}/${title}`)}
          >
            Watch Trailer
          </button>
        </div>

        {/* Movie Info  */}
        <div className=" ">
          {/* Heading  */}
          <div className="flex items-start justify-between gap-2 ">
            <div >
              <h1 className="text-2xl tracking-wide font-(family-name:--font-archivo)">{title}</h1>
              <span className="flex gap-1 text-[var(--text-secondary)] text-xs ">
                <p>{release_date.slice(0,4)} |</p>
                <p>{`${hours}h ${minutes}m`}</p>
              </span>
            </div>
            <div className="flex items-center gap-1">
              <FaStar className=" text-amber-300"/>
              <span className="">{Number(vote_average).toFixed(1)}</span>
            </div>
          </div>

          {/* Details Info */}
          <div className="mt-5">
              <h2>Details</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
