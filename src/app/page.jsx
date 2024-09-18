import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse } from "../libs/api-libs";
import Banner from "@/components/Carousel";

export default async function Page() {
  let SeasonalAnimeTop = await getAnimeResponse("seasons/now", "limit=5");
  const topAnime = await getAnimeResponse("top/anime", "limit=10")
  const upcomingSeasonAnime = await getAnimeResponse("seasons/upcoming", "limit=12")
  let RecommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  RecommendedAnime = {data: RecommendedAnime?.slice(0, 10)}

  return (
    <>
    <section>
      <Banner SeasonalAnimeTop={SeasonalAnimeTop}/>
    </section>
      <section>
        <Header title={'Paling Populer'} linkHref={'/populer'} linkTitle={'See All'} />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title={'season upcoming'} linkHref={'/upcoming'} linkTitle={"See All"}/>
        <AnimeList api={upcomingSeasonAnime}/>
      </section>
      <section className="pb-8">
        <Header title={'Recent Recommend'}/>
        <AnimeList api={RecommendedAnime} />
      </section>
    </>
  );
}
