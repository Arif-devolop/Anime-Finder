"use client"

import AnimeList from "@/components/AnimeList";
import { useEffect, useState } from "react";
import { getAnimeResponse } from "../../libs/api-libs";
import Header from "@/components/AnimeList/Header";
import Paginations from "@/components/Paginations";


export default function Page() {
  const [page, setPage] = useState(1)
  const [topAnime, setTopAnime] = useState([])

  const fetchData = async() =>{
    const populerAnime = await getAnimeResponse('top/anime', `page=${page}`)
    setTopAnime(populerAnime)
  }

  useEffect(() => {
    fetchData()
  }, [page])

  return (
    <main>
      <Header title={`Anime Terpopuler #${page}`}/>
      <AnimeList api={topAnime}/>
      <Paginations page={page} lastPage={topAnime.pagination?.last_visible_page} setPage={setPage}/>
    </main>
  );
}