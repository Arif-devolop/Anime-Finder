export default function ButtonPage({page, setPage}){
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
    return(
        <button className="py-2 px-4 bg-color-secondary" onClick={setPage ? ()=> handlePage(page): null}>{page}</button>
    )
}