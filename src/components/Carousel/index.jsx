import { Carousel } from "flowbite-react";
import AnimeInfo from "./AnimeInfo";

export default async function Banner({SeasonalAnimeTop}) {
  let i = 1;

  return (
    <div className="h-[28rem] shadow-md">
      <Carousel slideInterval={2300}>
        {SeasonalAnimeTop.data.map((anime) => {
          return (
            <div
              style={{
                "--image-url": `url(${anime.images.webp.large_image_url})`,
              }}
              className="bg-[image:var(--image-url)] bg-cover bg-no-repeat w-full h-full"
            >
            <AnimeInfo anime={anime} index={i++}/>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
