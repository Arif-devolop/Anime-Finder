"use client"

import AnimeList from "@/components/AnimeList";
import { useEffect, useState } from "react";
import { getAnimeResponse } from "@/libs/api-libs";
import Header from "@/components/AnimeList/Header";
import Paginations from "@/components/Paginations";

export default function Page() {
  const [page, setPage] = useState(1)
  const [upcomignSeason, setUpcomingSeason] = useState([])

  
  async function fetchData(){
    const upcomingSeasonAnime =  await getAnimeResponse("seasons/upcoming", `limit=20&page=${page}`)
    return setUpcomingSeason(upcomingSeasonAnime)
  }

  useEffect(() => {
    fetchData()
  }, [page])

  return (
    <main>
      <Header title={`Seasonal Now #${page}`}/>
      <AnimeList api={upcomignSeason}/>
      <Paginations lastPage={upcomignSeason.pagination?.last_visible_page} page={page} setPage={setPage}/>
    </main>
  );
}