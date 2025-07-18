import { useSelector } from "react-redux";
import BannerItem from "./BannerItem";

const Banner = () => {
  const bannerData = useSelector((store) => store.cinepeek.bannerData);

  if (bannerData.length === 0) return;

  return (
    <section className="w-full h-full">
      <div className="flex ">
        {bannerData.map((item) => {
          return <BannerItem key={item.id} item={item}/>
        })}
      </div>
    </section>
  );
};

export default Banner;
