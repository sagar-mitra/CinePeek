import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useImage = (type,id) => {
    const [images, setImages] = useState(null);

    const getImages = async () => {
        const res = await fetch('https://api.themoviedb.org/3/movie/911430/images', API_OPTIONS)
        const data = await res.json();
        console.log(data);
    }


    useEffect(() => {
        getImages();
    }, [])
}

export default useImage;