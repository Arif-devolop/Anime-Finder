"use client";
import { getAnimeResponse } from "@/libs/api-libs";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import Paginations from "@/components/Paginations";
import { useEffect, useState } from "react";

export default function Page({ params }) {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);
  const [page, setPage] = useState(1);
  const [searchAnime, setSearchAnime] = useState([]);

  const fetchData = async () => {
    const searchAnimeData = await getAnimeResponse(
      "anime",
      `q=${decodedKeyword}&page=${page}`
    );
    return setSearchAnime(searchAnimeData);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      {searchAnime.data?.length === 0 ? (
        <h1 className="text-color-primary text-2xl font-extrabold text-center m-16">
          No Result for {keyword}
        </h1>
      ) : (
        <section>
          <Header title={`Pencarian Untuk ${decodedKeyword}...`} />
          <AnimeList api={searchAnime} />
        </section>
      )}
      {searchAnime.pagination?.last_visible_page > 1 ? (
        <Paginations
          page={page}
          setPage={setPage}
          lastPage={searchAnime.pagination?.last_visible_page}
        />
      ) : null}
    </>
  );
}
