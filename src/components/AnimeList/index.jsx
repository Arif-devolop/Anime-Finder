import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import AnimeCard from "./AnimeCard";

export default function AnimeList({ api }) {
  return (
    <div>
      <section className="flex flex-wrap gap-6 justify-center px-4">
        {api.data?.map((anime, index) => {
          return (
           <AnimeCard anime={anime} index={index.mal_id} key={anime.mal_id}/>
          );
        })}
      </section>
      </div>
  );
}
