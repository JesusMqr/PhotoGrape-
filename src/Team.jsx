import { useState } from "react";
import { TeamItem } from "./components/TeamItem";
import teamImage1 from "./images/team-Image-1.webp";
import teamImage2 from "./images/team-Image-2.webp";
import teamImage3 from "./images/team-Image-3.webp";


export const Team=()=>{

    const [text,setFullText] = useState("line-clamp-2");
    const [btnDisplay,setDisplayed] = useState("inline");


    const handleReadMore= ()=>{
        setFullText("line-clamp-none");
        setDisplayed("hidden");
        

    }
    return (
        <>
        <div className="bg-white py-10 text-slate-500">
            <div className=" max-w-screen-sm md:max-w-screen-lg mx-auto px-5
            text-center">
                <h2 className="uppercase text-lg md:text-3xl font-bold mb-10">Our Team Support</h2>
                <div className="grid grid-cols-1 px-16 mb-16 md:grid-cols-2 lg:grid-cols-3 gap-16">
                    <TeamItem source={teamImage1} title="Great team" text="At PhotoGrape, we boast a team of skilled and passionate photographers ready to capture every special moment with unmatched professionalism and creativity"/>
                    <TeamItem source={teamImage2} title="Professional outcome"  text="At PhotoGrape, we provide professional-grade results in both our photography and service. Our skilled team ensures top-quality, creative images, paired with exceptional customer care from start to finish."/>
                    <TeamItem source={teamImage3} title="Anywhere" text="In any setting, we strive to deliver professional-grade outcomes. Our dedicated team ensures top-quality results, paired with exceptional service from beginning to end" />
                </div>
                <hr className=" h-1 mx-auto my-4 bg-gray-300 border-0 rounded md:my-14"></hr>
                <div className="px-10 text-justify">
                    <p className={`overflow-ellipsis ${text} `} >At PhotoGrape, our team of photographers is comprised of passionate and talented professionals, each with extensive experience in capturing life's memorable moments. From weddings and corporate events to family portraits and stunning landscapes, our team is equipped with the skills and creativity necessary to make each photoshoot unique and special.
                    
                    
                    At PhotoGrape, we take pride in our collaborative, customer-centric approach. We work closely with you to understand your needs and desires, ensuring that every detail of your photoshoot aligns perfectly with your expectations. With our team by your side, you can trust that you'll receive exceptional service and outstanding photographic results on every occasion.</p>
                    <button id="btnReadMore" onClick={handleReadMore}
                     className={`py-5 text-blue-600 font-semibold underline ${btnDisplay}`}>
                        Leer mas...
                    </button>
                </div>
            </div>

        </div>

        </>
    )
}