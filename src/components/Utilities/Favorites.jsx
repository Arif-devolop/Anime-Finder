"use client"

import { Heart } from "@phosphor-icons/react";

export default function Favorites({favorites, ratingAge}) {

  return (
    <div className="flex mt-4 gap-1 flex-wrap">
      <span className="font-normal mb-2 flex gap-1 items-center bg-[#DC143C] rounded-s-md px-2 py-1">
        <Heart weight="fill" size={18}/>
        <p>{favorites}</p>
      </span>
      <span className="font-bold mb-2 flex gap-1 items-center bg-[white] px-2 rounded-e-md text-[black] py-1">
        <p id="rating">{ratingAge.slice(0, 6)}</p>
      </span>
    </div>
  );
}
