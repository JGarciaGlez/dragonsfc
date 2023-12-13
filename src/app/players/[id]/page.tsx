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
    <div className="flex flex-col items-center pt-10">
          <form className="pb-8 flex flex-col  w-[20rem]" action={update}>
      <input type="text" name="name" aria-label="Name" />
      <input type="text" name="position" aria-label="Position" className="mt-4" />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white mt-4 font-bold py-2 px-4 rounded"
      >
        Update Player
      </button>
    </form>
    </div>

  );
};

export default PlayersEdit;
