"use client";
import { TicketsCard } from "@/components/TicketsCard";
import Image from "next/image";
export default function Home() {
  return (
    <main className="grid grid-cols-2 gap-3 md:gap-10 min-h-max md:pt-20 md:pb-20">
      <TicketsCard
        title="Football · First Team · Female"
        description="Primera División Femenina"
        date="Matchday 11"
        fulldate="Saturday, Dec 9, 6:30 PM h"
        destination="Estadio Alfredo Di Stéfano"
        capacity="Capacity for general public"
      />
      <TicketsCard
        title="Football · First Team · Female"
        description="Primera División Femenina"
        date="Matchday 11"
        fulldate="Saturday, Dec 9, 6:30 PM h"
        destination="Estadio Alfredo Di Stéfano"
        capacity="Capacity for general public"
      />
      <TicketsCard
        title="Football · First Team · Female"
        description="Primera División Femenina"
        date="Matchday 11"
        fulldate="Saturday, Dec 9, 6:30 PM h"
        destination="Estadio Alfredo Di Stéfano"
        capacity="Capacity for general public"
      />
      <TicketsCard
        title="Football · First Team · Female"
        description="Primera División Femenina"
        date="Matchday 11"
        fulldate="Saturday, Dec 9, 6:30 PM h"
        destination="Estadio Alfredo Di Stéfano"
        capacity="Capacity for general public"
      />
      <div className="md:pt-20 md:pb-20 bg-gray-800 w-screen  md:h-80 flex  md:flex-row flex-col  justify-center items-center gap-7  mt-5 md:mt-10">
        <Image
          src={"/ticket1.jpg"}
          alt="ticket1"
          width={300}
          height={300}
          className="object-cover"
        />
        <Image
          src={"/ticket2.jpg"}
          alt="ticket2"
          width={300}
          height={300}
          className="object-cover"
        />
        <Image
          src={"/ticket3.jpg"}
          alt="ticket1"
          width={300}
          height={200}
          className="object-contain"
        />
      </div>
    </main>
  );
}
