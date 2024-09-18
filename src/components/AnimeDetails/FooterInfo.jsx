export default function FooterInfo({ anime }) {
  return (
    <div className="flex flex-col w-full md:w-[75%] gap-5 text-md md:text-xl bg-gradient-to-bl from-color-secondary bg-opacity-75 rounded-lg p-5 shadow">
      <span className="flex">
        <p>
          <span className="font-bold">Studio:</span>{" "}
          {anime.data.studios.map((data) => {
            return data.name;
          })}
        </p>
      </span>
      <span className="flex">
        <p>
          <span className="font-bold">Producers:</span>{" "}
          {anime.data.producers.map((data) => {
            return data.name + ", ";
          })}
        </p>
      </span>
      <span className="flex border-b">
        <p>
          <span className="font-bold">Background:</span>
          <br />
          {anime.data.background ? anime.data.background : "-"}
        </p>
      </span>
      <span className="flex flex-col items-center py-5">
          <div className="flex flex-wrap justify-center gap-4">
            {anime.data.genres.map((data) => {
              return (
                <span className="flex text-lg items-center justify-center px-6 py-[0.15rem] bg-color-dark rounded-full">
                  <p>{data.name}</p>
                </span>
              );
            })}
          </div>
      </span>
    </div>
  );
}
