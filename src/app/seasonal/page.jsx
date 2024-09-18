"use client"

import AnimeList from "@/components/AnimeList";
import { useEffect, useState } from "react";
import { getAnimeResponse } from "@/libs/api-libs";
import Header from "@/components/AnimeList/Header";
import Paginat from "@/components/Paginations/Paginat";
import LoadMore from "@/components/AnimeList/LoadMore";
import AnimeCard from "@/components/AnimeList/AnimeCard";
import Paginations from "@/components/Paginations";

export default function Page() {
  const [page, setPage] = useState(1)
  const [SeasonalAnime, setSeasonalAnime] = useState([])
  
  async function fetchData(){
    const anime =  await getAnimeResponse("seasons/now", `page=${page}`)
    return setSeasonalAnime(anime)
  }

  useEffect(() => {
    fetchData()
  }, [page])

  return (
    <main>
      <Header title={`Seasonal Now #${page}`}/>
      <AnimeList api={SeasonalAnime}/>
      <Paginations lastPage={SeasonalAnime.pagination?.last_visible_page} page={page} setPage={setPage}/>
    </main>
  );
}