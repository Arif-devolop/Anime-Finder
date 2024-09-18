import Paginat from "./Paginat";

export default function Paginations({lastPage, page, setPage}){
    return(
        <Paginat lastPage={lastPage} page={page} setPage={setPage}/>
    )
}