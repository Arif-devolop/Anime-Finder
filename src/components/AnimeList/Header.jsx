import Link from "next/link";

export default function Header({ title, linkHref, linkTitle }) {
  return (
      <div className=" flex justify-between items-center p-6">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-color-primary">
          {title}
        </h1>
        {linkHref && linkTitle ? (
          <Link
            href={linkHref}
            className="text-lg md:text-base lg:text-lg font-bold border-b-2 text-color-primary hover:text-color-accent transition ease-in-out duration-150"
          >
            {linkTitle}
          </Link>
        ) : null}
      </div>
  );
}
