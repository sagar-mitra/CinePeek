import React, { useEffect } from "react";
import Banner from "../components/Banner";
import HorizontalScrollCard from "../components/HorizontalScrollCard";
import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";


const Home = () => {
  const trendingData = useSelector((store) => store.cinepeek.bannerData);

  const popularData = useFetch("movie" ,"popular");
  const topRatedData = useFetch("movie" ,"top_rated");
  const upcomingData = useFetch("movie" ,"upcoming");
  const popularTVData = useFetch("tv", "popular")
  if (!trendingData && !popularData && !topRatedData) return;
  return (
    <div className="text-[var(--text-primary)] bg-[var(--main-color)] min-h-screen">
      <Banner type="movie"/>
      <HorizontalScrollCard heading="Trending Movies" data={trendingData} type="movie"/>
      <HorizontalScrollCard heading="Top Rated Movies" data={topRatedData} type="movie"/>
      <HorizontalScrollCard heading="Popular Movies" data={popularData} type="movie"/>
      <HorizontalScrollCard heading="Upcoming Movies" data={upcomingData} type="movie"/>
      <HorizontalScrollCard heading="Popular TV Series" data={popularTVData} type="tv"/>
    </div>
  );
};

export default Home;
