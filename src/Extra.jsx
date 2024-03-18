import extraImage1 from './images/extra-Image-1.webp';
import extraImage2 from './images/extra-Image-2.webp';


import friendlyIcon from './assets/friendly.svg';
import libraryIcon from './assets/library.svg';
import settingIcon from './assets/setting.svg';
import mobileIcon from './assets/mobile.svg';


export const Extra=()=>{
    return(
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 ">
            <div className='bg-gray-200 '>
                <img className='h-full' src={extraImage1} alt="" />
            </div>
            <div className='bg-slate-200 text-slate-500 p-10 flex flex-col gap-5 justify-around' >
                <div  className='flex gap-2 lg:gap-6 flex-col'>
                <span  className='flex gap-4' >
                    
                    <img className='w-6 text-blue-800' src={settingIcon} alt="" /> <h3 className='text-2xl font-bold'>CUSTOMIZE</h3>
                </span>
                <p className='text-base md:text-md lg:text-xl'>At PhotoGrape, we offer customization options to tailor your experience to your unique preferences. Whether it's adjusting the style of your photo shoot, selecting specific editing techniques, or creating custom packages to suit your needs, we're here to make your vision a reality. With our personalized approach, you can create memories that are truly one-of-a-kind.</p>
                
                </div>
                <div className='flex gap-6 flex-col'>
                <span className='flex gap-4'>
                    <img className='w-6' src={libraryIcon} alt="" /> <h3 className='text-2xl font-bold'>COLLECTION</h3>
                </span>
                <p className='text-base md:text-md lg:text-xl'>Explore our latest collection at PhotoGrape. From timeless classics to modern masterpieces, our curated selection features a diverse range of photographs to suit every taste and occasion. Whether you're looking for wedding portraits, family snapshots, or stunning landscapes, our collection offers something for everyone. Browse now and discover the perfect addition to your personal or professional portfolio</p>
                
                </div >
            </div>
            <div className='bg-blue-500 text-white p-10 flex flex-col gap-5 justify-around' >
                <div  className='flex gap-2 lg:gap-6 flex-col'>
                <span  className='flex gap-4' >
                    
                    <img className='w-6 text-blue-800' src={friendlyIcon} alt="" /> <h3 className='text-2xl font-bold'>USER FRIENDLY</h3>
                </span>
                <p className='text-base md:text-md lg:text-xl'>At PhotoGrape, we prioritize creating a user-friendly experience. Our website and services are designed with ease of use in mind, ensuring that every interaction with us is seamless and intuitive. From browsing our portfolio to booking a session, we strive to make every step of the process effortless and enjoyable for our clients.</p>

                </div>
                <div className='flex gap-6 flex-col'>
                <span className='flex gap-4'>
                    <img className='w-6' src={mobileIcon} alt="" /> <h3 className='text-2xl font-bold'>100% RESPONSIVE</h3>
                </span>
                <p className='text-base md:text-md lg:text-xl'>At PhotoGrape, we pride ourselves on being 100% responsive. Our website and services are designed to seamlessly adapt to any device, whether it's a desktop computer, tablet, or smartphone. This ensures that our clients can access our offerings and information easily and conveniently, no matter where they are or what device they're using</p>
                
                </div >
            </div>
            <div className='bg-blue-500'>
                <img className='h-full' src={extraImage2} alt="" />
            </div>
        </div>
        </>
    )
}