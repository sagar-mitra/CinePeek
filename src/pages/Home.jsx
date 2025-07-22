import React from "react";
import Banner from "../components/Banner";
import HorizontalScrollCard from "../components/HorizontalScrollCard";
import { useSelector } from "react-redux";

const Home = () => {
  const trendingData = useSelector((store) => store.cinepeek.bannerData);
  return (
    trendingData && (
      <div className="text-[var(--text-primary)] bg-[var(--main-color)] min-h-screen">
        <Banner />
        <HorizontalScrollCard heading="Trending" data={trendingData} />
      </div>
    )
  );
};

export default Home;
