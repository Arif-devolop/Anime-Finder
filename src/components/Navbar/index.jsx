import Link from "next/link";
import InputSearch from "./InputSearch";
import SideBar from "./SideBar";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className=" z-50 w-full bg-color-dark rounded-b-sm shadow-xl">
      <div className="flex justify-between md:items-center py-[0.95rem] px-5 flex-col md:flex-row gap-3 md:gap-0">
        <div className="flex items-center md:gap-3 gap-1">
          <SideBar />
          <Image src={'/logo/nflogo.png'} alt="" width={50} height={50}/>
          <Link
            href={"/"}
            className="font-bold text-2xl lg:text-4xl text-color-primary"
          >
            NimeFinder
          </Link>
        </div>
        <InputSearch />
      </div>
      <div>
      </div>
    </header>
  );
}
