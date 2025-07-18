import useGetLogo from "../hooks/useGetLogo";
import { IMAGE_URL } from "../utils/constants";

const BannerItem = ({ item }) => {
  const logo = useGetLogo(item.id);

  if (!logo) return;

  const { backdrop_path, overview } = item;
  return (
    <div className="min-w-full min-h-full relative">
      <div>
        <img
          className="max-h-screen min-w-full object-cover"
          src={IMAGE_URL + backdrop_path}
          alt=""
        />
      </div>

      {/* black overlay */}
      <div className="absolute top-0 w-full h-full bg-gradient-to-t from-[var(--main-color)] to-transparent" />

      {/* movie info  */}
      <div className="container mx-auto absolute top-1/2 left-1/2 -translate-x-1/2  pl-10 lg:pl-20">
        <img className="h-6 sm:h-15 lg:h-32 " src={IMAGE_URL + logo} alt="" />
        <p className="w-6/12 sm:w-7/12 lg:5/12 text-[10px] md:text-base lg:text-base text-ellipsis line-clamp-2 sm:line-clamp-3 pl-1 tracking-wide text-[var(--text-muted)] leading-3 md:leading-4 lg:leading-5 mt-2 md:mt-4">
          {overview}
        </p>
        <div className="mt-2 md:mt-4 ml-1 flex gap-2">
          <button className="text-[7px] md:text-sm px-2 py-0.5 md:px-6 md:py-2 rounded font-medium tracking-wide bg-neutral-100 text-[var(--main-color)] flex items-center cursor-pointer">
            <i class="bx  bx-play text-sm md:text-xl"></i>
            <span>Play</span>
          </button>
          <button className="text-[7px] md:text-sm px-2 py-0.5 md:px-6 md:py-2 border rounded font-medium tracking-wide bg-neutral-100/60 text-[var(--main-color)] flex items-center gap-1 cursor-pointer">
            <i class="bx  bx-info-circle text-sm md:text-xl"></i>
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerItem;
