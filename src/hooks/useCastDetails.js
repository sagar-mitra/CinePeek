import { useEffect, useState } from "react"
import { API_OPTIONS } from "../utils/constants";

const useCastDetails = (type, id) => {

    const [castInfo, setCastInfo] = useState(null);
    const [director, setDirector] = useState(null)

    const getCastInfo = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/${type}/${id}/credits?language=en-US`, API_OPTIONS);
        const data = await res.json();
        const castData = data.cast.filter((item) => item.known_for_department === "Acting");
        const directorData = data.crew.filter((item) => item.known_for_department === "Directing")
        setCastInfo(castData);
        setDirector(directorData)

    }

    useEffect(() => {
        getCastInfo()
    }, [])



        return {castInfo, director}
    
}

export default useCastDetails;