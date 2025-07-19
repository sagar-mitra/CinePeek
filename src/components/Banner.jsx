import { useSelector } from "react-redux";
import BannerItem from "./BannerItem";
import { useState } from "react";

const Banner = () => {
  const [imageIndex, setImageIndex] = useState(0)
  const bannerData = useSelector((store) => store.cinepeek.bannerData);
  const data = bannerData.slice(0,13)

  if (bannerData.length === 0) return;
  
   const handleLeft = () => {
    if(imageIndex > 0) {
      setImageIndex(imageIndex - 1)
    }
  }

  const handleRight = () => {
    if(imageIndex < 12) {
      setImageIndex(imageIndex + 1)
    }
  }

  return (
    <section className="max-w-screen min-h-screen">
      <div className="flex w-full h-full overflow-hidden" >
        {data.map((item,idx) => {
          return idx === imageIndex && <BannerItem key={item.id} item={item} handleRight={handleRight} handleLeft={handleLeft}/>
        })}
      </div>
    </section>
  );
};

export default Banner;
