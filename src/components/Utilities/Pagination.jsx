"use client"
import { useState } from "react";

export default function Pagination({ page, lastPage, setPage}) {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextpage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };
  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };
  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl">
      <button className="py-2 px-4 rounded-sm bg-color-secondary">
          {page}
      </button>
      <button className="py-2 px-4 rounded-sm bg-color-secondary">
          {lastPage}
      </button>
    </div>
  );
}
