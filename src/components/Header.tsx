"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const Header = () => {
  const [open, setOpen] = useState(true);
  return (
    <nav className="h-28 w-full bg-black  flex border-b-2 border-gray-600 pt-1 ">
      <section>
        <Image src={"/dragonfc.png"} alt="logo" width={150} height={150} />
      </section>
      <section className="flex-1  pt-3 hidden lg:block">
        <ul className="flex justify-around items-center">
          <li className="hover:text-[#EA2706] cursor-pointer">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="hover:text-[#EA2706]  cursor-pointer">
            <Link href={"/players"}>Players</Link>
          </li>
          <li className="hover:text-[#EA2706]  cursor-pointer">
            <Link href={"/tickets"}>Tickets</Link>
          </li>
          <li className="hover:text-[#EA2706]  cursor-pointer">Shop</li>
          <li className="hover:text-[#EA2706]  cursor-pointer">
            <Link href={"/contact"}>Contact us</Link>
          </li>
        </ul>
      </section>
      <section className="lg:hidden flex-items-center ">
        <div className="flex flex-col justify-center">
          <span
            className="cursor-pointer flex justify-end  absolute   right-10 md:right-16 top-9 border border-t-2 border-yellow-600"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
                className=" text-[#EA2706]"
                fill="currentColor"
              >
                <path
                  fill="currentColor"
                  d="M21 18H3v-2h18v2Zm0-5H3v-2h18v2Zm0-5H3V6h18v2Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 12 12"
              >
                <path
                  fill="currentColor"
                  d="M2.22 2.22a.749.749 0 0 1 1.06 0L6 4.939L8.72 2.22a.749.749 0 1 1 1.06 1.06L7.061 6L9.78 8.72a.749.749 0 1 1-1.06 1.06L6 7.061L3.28 9.78a.749.749 0 1 1-1.06-1.06L4.939 6L2.22 3.28a.749.749 0 0 1 0-1.06Z"
                />
              </svg>
            )}
          </span>
          <nav className={`${open ? "hidden" : "block"}`}>
            <ul className="absolute top-28 left-4">
              <li className="hover:text-[#EA2706]  cursor-pointer pt-2">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="hover:text-[#EA2706]  cursor-pointer pt-2">
                <Link href={"/players"}>Players</Link>
              </li>
              <li className="hover:text-[#EA2706]  cursor-pointer pt-2">
                <Link href={"/tickets"}>Tickets</Link>
              </li>
              <li className="hover:text-[#EA2706]  cursor-pointer pt-2">Shop</li>
              <li className="hover:text-[#EA2706]  cursor-pointer pt-2">
                <Link href={"/contact"}>Contact us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </nav>
  );
};
export default Header;
