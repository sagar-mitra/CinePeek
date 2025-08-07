import React, { useEffect } from "react";
import Banner from "../components/Banner";
import HorizontalScrollCard from "../components/HorizontalScrollCard";
import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const trendingData = useSelector((store) => store.cinepeek.bannerData);

  const popularData = useFetch("movie", "popular");
  const topRatedData = useFetch("movie", "top_rated");
  const upcomingData = useFetch("movie", "upcoming");
  const popularTVData = useFetch("tv", "popular");
  if (!trendingData && !popularData && !topRatedData) return;
  return (
    <div className="text-[var(--text-primary)] bg-[var(--main-color)] min-h-screen">
      <Banner type="movie" />
      <div className="mt-10 h-full">
        <HorizontalScrollCard
          heading="Trending Movies"
          data={trendingData}
          type="movie"
          list= "now_playing"
        />
        <HorizontalScrollCard
          heading="Top Rated Movies"
          data={topRatedData.results}
          type="movie"
          list= "top_rated"
        />
        <HorizontalScrollCard
          heading="Popular Movies"
          data={popularData.results}
          type="movie"
          list= "popular"
        />
        <HorizontalScrollCard
          heading="Upcoming Movies"
          data={upcomingData.results}
          type="movie"
          list= "upcoming"
        />
        <HorizontalScrollCard
          heading="Popular TV Series"
          data={popularTVData.results}
          type="tv"
          list= "popular"
        />
      </div>
    </div>
  );
};

export default Home;
