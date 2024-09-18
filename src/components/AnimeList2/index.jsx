import AnimeCard2 from "./AnimeCard2";

export default function AnimeList2({ api }) {
  return (
    <div className="w-full overflow-hidden snap-x horizontal-scroll">
      <div className="flex flex-row gap-1 w-max">
        {api.data?.map((anime, index) => {
          return (
            <AnimeCard2 anime={anime} index={index.mal_id} key={anime.mal_id} />
          );
        })}
      </div>
    </div>
  );
}
