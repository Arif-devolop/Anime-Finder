export default function Paginat({ page, lastPage, setPage }) {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
}
const handlePage = (page) => {
    setPage(page);
    scrollTop();
  };

  let pageNumbers = [];
  for (let i = page - 2; i <= page + 2; i++) {
    if (i < 1) continue;
    if (i > lastPage) break;

    pageNumbers.push(i);
  }
  return (
    <span className="flex flex-col items-center gap-3 text-lg md:text-xl mb-8">
    <div className="flex justify-center items-center py-2 px-0 text-color-primary mt-4">
      {pageNumbers.map((pageNum) => {
        return (
          <button
            className={`py-2 px-4 hover:text-color-accent hover:font-bold hover:scale-110 transition-all && ${pageNum === page ? "text-color-accent border-b scale-110 transition font-bold" : ''}` }
            onClick={() => handlePage(pageNum)}
            key={pageNum}
          >
            {pageNum}
          </button>
        );
      })}
    </div>
    <p className="text-white text-center">Last Page&nbsp;
      <button className="text-color-accent underline" onClick={() => handlePage(lastPage)}>{lastPage}</button>
    </p>
    </span>
  );
}
