import React from "react";
import Banner from "../components/Banner";
import HorizontalScrollCard from "../components/HorizontalScrollCard";
import { useSelector } from "react-redux";

const Home = () => {
  const trendingData = useSelector((store) => store.cinepeek.bannerData);
  console.log(trendingData);
  return (
    trendingData && (
      <div className="text-[var(--text-primary)] ">
        <Banner />
        <HorizontalScrollCard heading="Trending" data={trendingData} />
      </div>
    )
  );
};

export default Home;
