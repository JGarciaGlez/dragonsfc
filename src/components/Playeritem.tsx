"use client";

import { deletePlayer } from "@/app/libs/actions";
import { PlayerItemProps } from "@/types/types";
import Link from "next/link";
const Playeritem = ({ player }: PlayerItemProps) => {
  const handleDelete = async (id: number) => {
    await deletePlayer(id);
  };
  return (
    <div key={player.id} className="pt-10 text-justify">
      <h1>{player.name}</h1>
      <h2 className="pt-2">{player.position}</h2>
      <div className="flex gap-4 mt-3">
        <button
          onClick={() => {
            handleDelete(player.id);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
            className="text-red-500"
            fill="currentColor"
          >
            <path
              fill="currentColor"
              d="M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7Zm2-4h2V8H9v9Zm4 0h2V8h-2v9Z"
            />
          </svg>
        </button>
        <Link href={`/players/${player.id}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
            className="text-blue-500"
            fill="currentColor"
          >
            <path
              fill="currentColor"
              d="M5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.588 1.413T19 21H5Zm7-9Zm-3 3v-4.25l9.175-9.175q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4q0 .375-.138.738t-.437.662L13.25 15H9ZM21.025 4.4l-1.4-1.4l1.4 1.4ZM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575V13Zm6.5-6.5l-.725-.7l.725.7l.7.7l-.7-.7Z"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};
export default Playeritem;
