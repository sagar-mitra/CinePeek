import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useImage = (type,id) => {
    const [images, setImages] = useState([]);

    const getImages = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/${type}/${id}/images`, API_OPTIONS)
        const data = await res.json();
        setImages(data)
    }


    useEffect(() => {
        getImages();
    }, [])

    if(images) return images
}

export default useImage;