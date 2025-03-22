import { ReactElement } from "react"

type TerrainStats = {
    DamageDealt: string
    ShieldBlockRate: string
}

type TTerrain = {
    urban: TerrainStats
    outdoor: TerrainStats
    indoor: TerrainStats
}

export type TCharacter = {
    id: number
    name: string
    profile: string
    rarity: string
    baseStar: number
    position: string
    role: string
    armorType: string
    bulletType: string
    weaponType: string
    squadType: string
    school: string
    terrain: TTerrain
}

export type TDetailCharacter = {
    _id: string
    name: string
    school: string
    birthday: string
    photoUrl: string
    image: string
    imageSchool: string
    damageType: string
}

export type TDetailCharacterList = {
    message: string
    dataAllPages: number
    data: TDetailCharacter[]
}

export type TFilterOption = {
  key: string;
  icon: ReactElement;
}