"use client"

import { BookmarkSimple, Eye, Heart, VideoCamera } from "@phosphor-icons/react";

export default function AllStats({animeStats, ratingAge}) {
      
  return (
    <div className="flex mt-4 gap-1 flex-wrap text-sm justify-center">
      <span className="mb-2 flex gap-1 items-center bg-[#FF6961] rounded px-1">
        <Heart weight="fill" size={18}/>
        <p>{animeStats.data.scores[0].votes}</p>
      </span>
      <span className="font-bold mb-2 flex gap-1 items-center bg-[#F6F5F2] px-2 rounded text-[black] py-1">
        <p id="rating">{ratingAge.slice(0, 6)}</p>
      </span>
      <span className="font-bold mb-2 flex gap-1 items-center bg-[#008080] px-2 rounded py-1 text-[#F6F5F2]">
      <Eye weight="fill" size={18} />
        <p id="rating">{animeStats.data.watching}</p>
      </span>
      <span className="font-bold mb-2 flex gap-1 items-center bg-[#4169E1] px-2 rounded py-1 text-[#F6F5F2]">
      <BookmarkSimple size={18} />
        <p id="rating">{animeStats.data.plan_to_watch}</p>
      </span>
      <span className="font-bold mb-2 flex gap-1 items-center bg-[#222] px-2 rounded py-1 text-[#F6F5F2]">
      <VideoCamera size={18} />
        <p id="rating">{animeStats.data.total}</p>
      </span>
    </div>
  );
}
