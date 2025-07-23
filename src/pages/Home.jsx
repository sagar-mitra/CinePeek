import React from "react";
import Banner from "../components/Banner";
import HorizontalScrollCard from "../components/HorizontalScrollCard";
import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const trendingData = useSelector((store) => store.cinepeek.bannerData);

  const popularData = useFetch("popular");
  const topRatedData = useFetch("top_rated");
  if (!trendingData && !popularData && topRatedData) return;

  return (
    <div className="text-[var(--text-primary)] bg-[var(--main-color)] min-h-screen">
      <Banner />
      <HorizontalScrollCard heading="Trending" data={trendingData} />
      <HorizontalScrollCard heading="Top Rated" data={topRatedData} />
      <HorizontalScrollCard heading="Popular" data={popularData} />
    </div>
  );
};

export default Home;
