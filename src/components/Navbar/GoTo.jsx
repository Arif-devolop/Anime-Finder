export default function GoTo({namePage, href}){
    return(
        <li className="border-b-[1.75px]">
        <a
          href={href}
          className="hover:text-color-accent block p-[1.15rem] font-bold"
        >
          {namePage}
        </a>
      </li>
    )
}