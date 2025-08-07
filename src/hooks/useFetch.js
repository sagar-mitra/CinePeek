import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useFetch = (type, list, page = 1) => {
  const [data, setData] = useState([]);

  const movieData = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/${type}/${list}?language=en-US&page=${page}`,
        API_OPTIONS
      );
      const resData = await res.json();
      setData(resData)
    } catch (error) {
        console.log("Error: ", error);
    }
  };

  useEffect(() => {
    movieData();
  }, []);


  return data;
};

export default useFetch;
