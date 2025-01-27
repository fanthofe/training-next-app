import { prisma } from "@/lib/prisma"
import DataTable from "../_components/dataTables";
import Link from "next/link"

export default async function CharactersPage() {
    const characters = await prisma.character.findMany();

    return (
        <div className="px-4">
            <h1 className="text-3xl mb-5">Liste des personnages</h1>
            <ul>
                {
                    characters.map((character) => (
                        <li className="mb-5" key={character.matricule}>
                            <span>{character.name}</span>
                            <Link 
                                href={`/characters/character/${character.matricule}`}
                                className="bg-blue-600 border-none text-white rounded-full p-2"
                            >
                                See stats
                            </Link>
                        </li>
                    ))
                }
            </ul>
            {/* {DataTable()} */}

        </div>
    )
}