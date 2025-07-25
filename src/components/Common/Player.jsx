import React, { useEffect } from 'react'
import { API_OPTIONS } from '../../utils/constants'
import useTrailer from '../../hooks/useTrailer'

const Player = () => {
    // I need the id and the api call
    // Title, date, player 

    const trailer = useTrailer(1087192);

    if(!trailer) return;


  return (
    <div>
        /
    </div>
  )
}

export default Player