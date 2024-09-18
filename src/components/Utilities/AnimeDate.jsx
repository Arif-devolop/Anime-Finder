"use client";
import { CalendarBlank, Clock, PlayCircle } from "@phosphor-icons/react";

export default function AnimeDate({ anime, rowOrCol }) {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <div className={`flex gap-4 flex-wrap flex-${rowOrCol}`}>
      <div className="flex gap-1">
        <PlayCircle size={20} weight="fill" />
        {anime.type ? <p>{anime.type}</p> : null}
      </div>
      <div className="flex gap-1">
        <Clock size={20} weight="fill" />
        {anime.duration ? <p>{anime.duration}</p> : null}
      </div>
      <div className="flex gap-1">
        <CalendarBlank size={20} weight="fill" />
        {anime.aired.from ? (
          <p>{`${months[anime.aired.prop.from.month - 1]} ${
            anime.aired.prop.from.day
          }, ${anime.aired.prop.from.year}`}</p>
        ) : "-"}
      </div>
    </div>
  );
}
