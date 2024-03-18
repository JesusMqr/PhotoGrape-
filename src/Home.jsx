export const Home=()=>{
    return (
        <>
            <div className="flex flex-col gap-10 text-white text-center py-10 md:py-32
                max-w-screen-sm  md:max-w-screen-lg mx-auto px-5 md:px-0" >
                <h2 className="uppercase font-bold text-2xl md:text-6xl">Hello & Welcome</h2>
                <h1 className="text-lg md:text-2xl">PhotoGrape, your Professional Photography Studio, the Best in the World</h1>
                <p className=" text-sm md:text-lg">
                Welcome to PhotoGrape, your premier destination for professional photography services. Our expert team is dedicated to capturing your precious moments with creativity and precision. Discover why we're renowned as the best photography studio worldwide.</p>
                <span>
                <button className="p-2 px-3 text-md md:text-xl bg-transparent border-white border-4 text-white rounded-3xl" >Join Now</button>
                </span>
            </div>
        </>
    )
}