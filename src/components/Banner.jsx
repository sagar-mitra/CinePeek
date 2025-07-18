import { useSelector } from 'react-redux'
import { IMAGE_URL } from '../utils/constants';

const Banner = () => {
    const bannerData = useSelector((store) => store.cinepeek.bannerData)
    
    if(bannerData.length === 0) return;

    console.log(bannerData);

  return (
    <section className='w-full h-full'>
        <div className='flex w-full h-full'>
            {
               bannerData.map((item) => {
                    return(
                        <div key={item.id} className='min-w-full min-h-full'>
                            <img className='w-full h-full' src={IMAGE_URL+item.backdrop_path} alt="" />
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Banner