import useTrailer from "../../hooks/useTrailer";
import { useNavigate, useParams } from "react-router-dom";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const Player = () => {
  const navigate = useNavigate()
  
  // Movie id from the query
  const { id } = useParams();

  // Trailer data
  const trailer = useTrailer(id);

  if (!trailer) return;
  console.log(id);
  // Destructuring the data
  const { key, name, published_at, type } = trailer;

  return (
    <div className="pt-10 sm:pt-16 lg:pt-22 lg:pb-10 max-lg:min-w-screen max-w-screen min-h-screen max-lg:max-h-screen flex flex-col justify-center lg:items-center ">
      <div className="relative flex flex-col gap-7 ">
        {/* Back Button  */}
        <button
            onClick={() => navigate(-1)}
          className="px-2 py-2 sm:py-3 sm:px-4 w-[70px] sm:w-[110px] max-lg:ml-3 flex items-center justify-center gap-1 sm:gap-3 text-xs sm:text-sm font-medium sm:font-bold tracking-wider rounded-lg  bg-white text-[var(--text-highlight)] shadow-2xs hover:bg-[var(--text-highlight)] hover:text-[var(--text-primary)] focus:outline-hidden cursor-pointer transition-all duration-300"
        >
          <MdOutlineKeyboardBackspace className="text-sm sm:text-xl" />
          Back
        </button>

        {/* Video Player */}
        <div>
          <iframe
            className=" lg:w-[63rem] lg:h-[600px] aspect-video"
            src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1&loop=1&playlist=${key}&rel=0`}
            title="YouTube video player"
            frameborder="0"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
            allowfullscreen
          />
        </div>

        {/* Video Info */}
        <div className="flex justify-between items-center px-10 text-[var(--text-secondary)] text-sm sm:text-lg">
          <p>{published_at.slice(0, 10)}</p>
          <h1>{name}</h1>
          <span>{type}</span>
        </div>
      </div>
    </div>
  );
};

export default Player;
