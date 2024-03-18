import facebookIcon from './assets/facebook.svg';
import gmailIcon from './assets/gmail.svg';
import instagramIcon from './assets/instagram.svg';
import twitterIcon from './assets/twitter-x.svg';
import youtubeIcon from './assets/youtube.svg';
import cameraLogo from './assets/camera.svg';
import grapeLogo from './images/grape.png';

export const NavBar=()=>{
    return (
        <>
            <header className='  '>
                <nav className='text-white  mx-auto text-center 
                max-w-screen-lg  md:flex md:justify-between  py-5'>
                    <div className='flex justify-center my-3 md:my-0'><img className='w-6 filter invert'  src={grapeLogo} alt="" /> <p className='text-2xl font-serif   '>PhotoGrape</p></div>
                    <ul className='flex justify-center gap-5'>
                        
                        <li><a href='#'><img src={facebookIcon} alt="" /></a></li>
                        <li><a href='#'><img src={gmailIcon} alt="" /></a></li>
                        <li><a href='#'><img src={instagramIcon} alt="" /></a></li>
                        <li><a href='#'><img src={twitterIcon} alt="" /></a></li>
                        <li><a href='#'><img src={youtubeIcon} alt="" /></a></li>
                    </ul>
                </nav>
            </header>
        </>

        
    )
}