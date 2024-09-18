export default function Synopsis({anime}){
    return(
        <div className="self-start">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold mb-4">Synopsis</h1>
        <p className="text-justify text-lg md:text-xl font-thin">
          {anime.data.synopsis}
        </p>
      </div>
    )
}