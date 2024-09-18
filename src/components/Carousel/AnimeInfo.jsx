import Link from "next/link";
import WatchButton from "../AnimeDetails/WatchButton";
import AnimeDate from "../Utilities/AnimeDate";

export default function AnimeInfo({ anime, index }) {
  return (
    <div className="md:backdrop-blur-sm w-full h-full md:backdrop-saturate-150 backdrop-brightness-65 md:backdrop-brightness-50 text-white gap-4 md:px-16 lg:px-24 md:py-8 flex items-end md:items-start bg-gradient-to-t from-color-dark md:bg-gradient-to-b">
      <img
        src={anime.images.jpg.large_image_url}
        className="bg-cover bg-no-repeat border-4 border-color-secondary w-auto max-h-full hidden md:block brightness-95"
      />
      <div className="flex flex-col items-start w-full md:w-auto py-8 px-4 md:py-0 md:px-0 md:bg-none">
        <h1 className="text-lg text-color-accent font-semibold">
          # {index} Seasonal Anime Now
        </h1>
        <h2 className="text-xl md:text-4xl font-bold">{anime.title}</h2>
        <AnimeDate anime={anime} rowOrCol={'row'} />
        <p className="hidden md:block mt-4">
          {anime.synopsis.slice(0, 280)} ...
        </p>
        <div className="flex gap-2 items-center mt-2">
        <Link href={`/anime/${anime.mal_id}`} className="px-6 rounded-md text-md lg:text-lg border border-color-accent bg-color-dark text-color-accent bg-opacity-80 hover:bg-opacity-100 transition-all">
        Details
        </Link>
        </div>
      </div>
    </div>
  );
}
