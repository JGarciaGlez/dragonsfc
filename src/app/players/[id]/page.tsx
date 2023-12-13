"use client";
import { updatePlayer } from "@/app/libs/actions";
import { useParams } from "next/navigation";
const PlayersEdit = () => {
  const { id } = useParams();
  const update = async (data: FormData) => {
    const name = data.get("name");
    const position = data.get("position");
    if (!name || !position) {
      return;
    }
    await updatePlayer(Number(id) as number, data as FormData);
  };
  return (
    <form className="pb-8 bg-red-600" action={update}>
      <input type="text" name="name" aria-label="Name" />
      <input type="text" name="position" aria-label="Position" />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Update Player
      </button>
    </form>
  );
};

export default PlayersEdit;
