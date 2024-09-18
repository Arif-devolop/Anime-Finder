"use client"

export default function LoadMore({setPage, page}){
    function nextMore(page){
      page = page + 1
    }
    return(
        <div>
            <button onClick={() => nextMore(page)} className="bg-white p-5">Next More</button>
        </div>
    )
}