type TerrainStats = {
    DamageDealt: string
    ShieldBlockRate: string
}

export type TTerrain = {
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