import { prisma } from '@/lib/prisma'

export default async function CharacterPage({ params } : { params: Promise<{matricule: string}>}) {
    const {matricule} = await params;

    const character = await prisma.character.findFirstOrThrow(
       { 
            where: { matricule }
        }
    )

    if(!character) {
        return (
            <div>Personnage inconnu</div>
        )
    }

    return (
        <div>
            <h1 className='text-3xl pb-10'>{character.name} - LVL {character.level}</h1>
            <h2 className='text-2xl pb-6'>Statistiques :</h2>
            <ul>
                <li>Vie : {character.life}</li>
                <li>Attaque : {character.attack}</li>
                <li>Défense : {character.defense}</li>
                <li>Expérience : {character.experience}</li>
            </ul>
        </div>
    )
}