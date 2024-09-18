import { getAnimeResponse, getNestedAnimeResponse } from "@/libs/api-libs";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import AnimeDetails from "@/components/AnimeDetails";

export default async function Page({ params: { id } }) {
  const anime = await getAnimeResponse(`anime/${id}/full`);

  let RecommendedAnime = await getNestedAnimeResponse(
    `anime/${id}/recommendations`,
    "entry", "limit=25"
  );
  const RecomAnimeLength = RecommendedAnime?.length;
  RecommendedAnime = { data: RecommendedAnime.slice(0 ,10)};
  return (
    <>
    <AnimeDetails anime={anime} id={id}/>
    {RecomAnimeLength > 0 ? (
      <section className="bg-color-dark shadow-md pb-8">
        <Header title={"Recent Anime"} />
        <AnimeList api={RecommendedAnime} />
      </section>
    ) : null}
  </>
  );
}
