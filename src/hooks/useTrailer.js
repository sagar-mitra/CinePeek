import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTrailer = (id) => {

    const [mainTrailer, setMainTrailer] = useState(null)

    const getMovieTrailer = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_OPTIONS)
        const trailerData =  await res.json();
        const allTrailer = trailerData.results.filter((item) => item.type === "Trailer")
        const trailer = allTrailer[0] ? allTrailer[0] : allTrailer[1]
        setMainTrailer(trailer)
    }

    useEffect(() => {
        getMovieTrailer()
    }, [])

    // Return the trailer
    if(mainTrailer) {
        return mainTrailer;
    }
    
}

export default useTrailer;