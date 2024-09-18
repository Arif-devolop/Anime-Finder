"use client";
import { CaretLeft } from "@phosphor-icons/react";
import { useState } from "react";
import GoTo from "./GoTo";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className="flex flex-col gap-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="bg-color-primary py-[1px] md:py-[2px] px-3 block"></span>
        <span className="bg-color-primary py-[1px] md:py-[2px] px-3 block"></span>
        <span className="bg-color-primary py-[1px] md:py-[2px] px-3 block"></span>
      </button>
      {!isOpen ? null : (
        <div
          className="z-10 top-0 left-0 bottom-0 right-0 backdrop-blur-sm bg-opacity-50 fixed no-doc-scroll"
          onClick={() => setIsOpen(!isOpen)}
        ></div>
      )}
      <aside>
        <nav>
          <div
            className={`fixed h-full top-0 left-0 w-64 z-20 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } ease-in-out duration-300 backdrop-blur-sm bg-color-dark bg-opacity-90 text-color-primary flex flex-col pt-10`}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="px-4 py-1 hover:text-color-accent self-start flex items-center gap-1"
            >
              <CaretLeft />
              <h1>Close</h1>
            </button>
            <ul className="text-md mt-6 flex flex-col gap-4">
              <GoTo namePage={'Home'} href={"/"}/>
              <GoTo namePage={'Populer'} href={"/populer"}/>
              <GoTo namePage={'Seasonal Now'} href={"/seasonal"}/>
              <GoTo namePage={'Seasonal Upcoming'} href={"/upcoming"}/>
            </ul>
          </div>
        </nav>
      </aside>
    </>
  );
}

