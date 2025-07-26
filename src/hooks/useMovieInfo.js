import { useDispatch } from "react-redux";
import { setMovieInfo } from "../store/cinePeekSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect, useState } from "react";

const useMovieInfo = (type, id) => {
  const [details, setDetails] = useState(null)
  // const dispatch = useDispatch();
  const movieInfo = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/${type}/${id}?language=en-US`,
      API_OPTIONS
    );
    const movieInfoData = await res.json();
    // dispatch(setMovieInfo(movieInfoData));
    setDetails(movieInfoData)
  };

  useEffect(() => {
    movieInfo();
  }, []);

  if(details) return details;
};

export default useMovieInfo;
