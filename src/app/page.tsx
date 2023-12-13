"use client";
import Image from "next/image";
export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between  pt-40  md:pt-56 ">
      <div className="w-full  h-20  opacity-60  flex justify-center  pt-32 mb:pb-60 items-center">
        <Image
          src={"/banners.jpg"}
          alt="logo"
          width={1000}
          height={100}
          className="object-cover rounded-2xl  aspect-auto"
        />
      </div>
      <div className="flex  flex-col  md:flex-row md:flex-wrap  gap-5 pt-36 w-full pb-12  items-center  md:justify-around  md:gap-8 md:pb-10 mb:pt-36">
        <Image
          src={"/gallery1.jpg"}
          alt="gallery1"
          width={200}
          height={200}
          className="object-cover rounded-2xl"
        />
        <Image
          src={"/gallery2.jpg"}
          alt="gallery2"
          width={200}
          height={200}
          className="object-cover rounded-2xl"
        />
        <Image
          src={"/gallery3.jpg"}
          alt="gallery3"
          width={200}
          height={200}
          className="object-cover rounded-2xl"
        />
        <Image
          src={"/gallery4.jpg"}
          alt="gallery4"
          width={200}
          height={200}
          className="object-cover rounded-2xl"
        />
      </div>
    </main>
  );
}
