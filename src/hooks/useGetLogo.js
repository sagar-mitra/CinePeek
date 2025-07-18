import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useGetLogo = (id) => {
  const [logo, setLogo] = useState("");

  const getLogo = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?include_image_language=en`,
      API_OPTIONS
    );
    const logoData = await res.json();
    // console.log(logoData.logos[0].file_path);
    setLogo(logoData?.logos[0]?.file_path)
  };

  useEffect(() => {
    getLogo();
  }, []);

  if(logo) {
    return logo;
  }
};

export default useGetLogo;

/* 💡 NOTE
       - ?include_image_language=en
       - it will filter the english logo
 */