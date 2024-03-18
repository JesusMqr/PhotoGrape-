export const TeamItem=({source,title,text})=>{
    return (
        <>
            <article className="flex flex-col gap-5 text-center md:text-start">
                <img className="" src={source} alt="" />
                <h3 className=" text-lg md:text-3xl font-semibold">{title}</h3>
                <p className=" text-base md:text-lg ">{text}</p>
            </article>
        </>
    )
}