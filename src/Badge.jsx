import trophyIcon from './assets/trophy.svg';
import shareIcon from './assets/share.svg';
import {LikeIcon} from './components/icons/LikeIcon';

import { useState } from 'react';



export const Badge=()=>{
    const [like, setLike] = useState("none")

    const handleLikeClick=()=>{
        let color = like=== 'none'?'white':'none';
    
        setLike(color);
    }

    return(
        <>
            <div className="bg-blue-600 text-white py-14
            ">
                <div className=" max-w-screen-sm md:max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 px-4">
                    <div className='col-span-2 flex flex-col text-center md:text-start  gap-5 md:gap-10 '>
                        <h2 className=" text-lg md:text-2xl font-bold">Item Popular & Best Seller</h2>
                        <p className=' text-sm md:text-xl'>Discover our popular and best-selling photography packages at PhotoGrape. Our curated selection features a range of options tailored to meet your needs, from stunning wedding albums to captivating family portraits. With our commitment to excellence and customer satisfaction, it's no wonder why our packages are the top choice for clients worldwide.
                        </p>
                        <div className='flex gap-14 justify-center md:justify-start'>
                            <button className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 flex  gap-3' onClick={handleLikeClick}
                             ><LikeIcon  fill={like}/><p>like</p>
                            </button> 
                            <button className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 flex  gap-3' ><img className='w-6' src={shareIcon}  alt="icono del boton compartir" /><p>Share</p>
                            </button>
                        </div>
                    </div>
                    <div className='text-end  mx-auto md:mx-0 w-1/2 md:w-2/3'>
                        <img src={trophyIcon} alt="" />
                    </div>
                </div>
                
            </div>
        </>
    )
}