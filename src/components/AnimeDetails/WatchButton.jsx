export default function WatchButton({ dataStreaming }) {
  return (
    <span>
      {!dataStreaming[0] ? null : (
        <button className="bg-color-dark text-color-accent bg-opacity-80 border border-color-accent rounded-full text-md lg:text-xl px-6 hover:bg-opacity-100 transition-all">
          <a href={dataStreaming[0]?.url} target="_blank">
            Watch anime!
          </a>
        </button>
      )}
    </span>
  );
}
