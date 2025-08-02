import { Outlet } from "react-router-dom";
import Header from "../src/components/Header";
import { API_OPTIONS } from "./utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBannerData } from "./store/cinePeekSlice";
import Footer from "./components/Footer";

const App = () => {
  const dispatch = useDispatch();

  // Fetch Trending Movies
  const getNowPlayingMovies = async () => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        API_OPTIONS
      );
      const nowPlayingData = await res.json();
      dispatch(setBannerData(nowPlayingData?.results.slice(0, 16)));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return (
    <div className="font-(family-name:--font-inter) bg-[var(--main-color)] ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
