import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";
import AnimeDate from "@/components/Utilities/AnimeDate";
import Synopsis from "./Sysnopsis";
import FooterInfo from "./FooterInfo";
import WatchButton from "./WatchButton";

export default function AnimeDetails({ anime, id }) {
  return (
    <main
      style={{
        "--image-url": `url(${anime.data.images.jpg.large_image_url})`,
      }}
      className="bg-[image:var(--image-url)] bg-center bg-cover bg-fixed bg-no-repeat w-full"
    >
      <div className=" lg:backdrop-blur-sm backdrop-brightness-[.15]">
        <div className="flex flex-col justify-center items-center text-color-primary px-7 md:px-20 gap-8 py-10">
          <div className="flex items-stretch gap-10 place-self-start flex-wrap md:flex-nowrap border-b pb-5 w-full">
            <Image
              src={anime.data.images.webp.large_image_url}
              alt={anime.data.images.jpg.image_url}
              width={320}
              height={500}
              className="max-w-44 lg:max-w-52 border-color-accent border-4 rounded-sm"
            />
            <div className="flex flex-col gap-4">
              <p className="text-sm">{anime.data.status}</p>
              <h3 className="text-2xl lg:text-5xl font-bold text-color-primary">
                {anime.data.title}
              </h3>
              <p className="textlg">{anime.data.title_japanese}</p>
              <AnimeDate anime={anime.data} rowOrCol={"col"} />
              <WatchButton dataStreaming={anime.data.streaming} />
            </div>
          </div>
          <Synopsis anime={anime} />
          <div className="">
            <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
          </div>
          <FooterInfo anime={anime} />
        </div>
      </div>
    </main>
  );
}
