import { useNavigate, useParams } from "react-router-dom";
import useMovieInfo from "../hooks/useMovieInfo";
import { IMAGE_URL } from "../utils/constants";
import useCastDetails from "../hooks/useCastDetails";
import useImage from "../hooks/useImage";
import MovieImagesSection from "../components/MovieImagesSection";
import HeadingSection from "../components/DetailsPage/HeadingSection";
import OverviewSection from "../components/DetailsPage/OverviewSection";
import CastSection from "../components/DetailsPage/CastSection";

const DetailsPage = () => {
  // Destructuring the query
  const { type, title, id } = useParams();
  const navigate = useNavigate();

  const details = useMovieInfo(type, id);

  const { castInfo, director } = useCastDetails(type, id);

  // const {castInfo, director} = data

  if (!details || !castInfo || !director) return;

  // Destructure the details
  const { poster_path } = details;

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
          <HeadingSection details={details} />

          {/* Details Info Section */}
          <OverviewSection
            details={details}
            castInfo={castInfo}
            director={director}
          />

          {/* Cast Section  */}
          <CastSection castInfo={castInfo} />
        </div>
      </div>

      <div className=" mt-2 sm:mt-4 lg:mt-10 mb-20 sm:px-12 lg:px-1">
        {/* Movie  Images */}
        <MovieImagesSection type={type} id={id}/>
      </div>
    </div>
  );
};

export default DetailsPage;
