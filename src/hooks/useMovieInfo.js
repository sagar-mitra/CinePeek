import { useDispatch } from "react-redux";
import { setMovieInfo } from "../store/cinePeekSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useMovieInfo = (id) => {
  const dispatch = useDispatch();
  const movieInfo = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      API_OPTIONS
    );
    const movieInfoData = await res.json();
    dispatch(setMovieInfo(movieInfoData));
  };

  useEffect(() => {
    movieInfo();
  }, []);
};

export default useMovieInfo;
