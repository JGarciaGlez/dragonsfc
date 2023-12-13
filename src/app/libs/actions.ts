"use server";
import { unstable_noStore as cache, revalidatePath } from "next/cache";
import { prisma } from "./prisma";
import { redirect } from "next/navigation";

export async function getPlayers() {
  cache();
  try {
    const players = await prisma.player.findMany();
    return { players };
  } catch (error) {
    return { error };
  }
}
export async function addPlayer(FormData: FormData) {
  const name = FormData.get("name");
  const position = FormData.get("position");
  try {
  await prisma.player.create({
      data: { name: name as string, position: position as string },
    });
  } catch (error) {
    return { error };
  }
  revalidatePath("/players");
  redirect("/players");
}
export async function deletePlayer(id:number
) {
    try {
        await prisma.player.delete({
            where: {
                id
            }
        })
    } catch (error) {
        return {error}
    }
    revalidatePath("/players")
    redirect("/players")
}

export async function updatePlayer(id: number, FormData: FormData) {
   const name = FormData.get("name");
   const position = FormData.get("position");
  try {
    await prisma.player.update({
      where: {
        id ,
      },
      data: {
        name:name as string,
        position:position as string,
      },
    });
  } catch (error) {
    return { error };
  }
  revalidatePath("/players");
  redirect("/players");
}