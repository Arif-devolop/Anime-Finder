import Image from "next/image";
import Link from "next/link";

export default function AnimeCard({ anime, index }) {
  return (
    <Link
      href={`/anime/${anime.mal_id}`}
      className=" cursor-pointer text-color-primary hover:text-color-accent transition-all mb-4 flex flex-col justify-center w-[150px] md:w-[229.3px] lg:w-[218.55px] xl:w-[200px] xl:mx-[0.7rem] xl:my-[0.5rem]"
      key={index}
    >
      <Image
        src={anime.images.webp.large_image_url}
        alt="..."
        width={150}
        height={350}
        className="object-cover rounded-md h-full w-full border-2 border-transparent hover:border-color-accent transition-all ease-in-out"
        priority={false}
      />
      <h1 className="md:text-lg text-sm pt-2 overflow-hidden text-ellipsis whitespace-nowrap font-bold">
        {anime.title}
      </h1>
      <div>
        {anime.type && anime.duration ? (
          <h3 className="text-color-primary opacity-60 font-thin md:text-base text-xs whitespace-nowrap">
            {anime.type} | {anime.duration}
          </h3>
        ) : (
          <h3 className="text-color-primary opacity-60 font-thin md:text-base text-xs whitespace-nowrap">
            ...
          </h3>
        )}
      </div>
    </Link>
  );
}
