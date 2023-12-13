"use server";
import Playeritem from "@/components/Playeritem";
import { getPlayers } from "../libs/actions";
import NewPLayerForm from "@/components/NewPLayerForm";
export default async function Home() {
  const { players } = await getPlayers();
  return (
    <main className="flex mx-0 flex-col container">
      <div className=""><NewPLayerForm/></div>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-10 md:gap-24 grid-rows-[minmax(100px,auto)] mx-auto ">
        {players?.map((player) => (
          <Playeritem key={player.id} player={player} />
        ))}
      </div>
    </main>
  );
}
