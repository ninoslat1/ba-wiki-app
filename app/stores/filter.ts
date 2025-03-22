import { observable } from "@legendapp/state";

export const attackFilter$ = observable<"Explosive" | "Mystic" | "Piercing" | "Sonic" | null>(null)
export const defenseFilter$ = observable<"Heavy" | "Light" | "Elastic" | "Special" | null>(null)
export const nameFilter$ = observable<string>("")
export const starFilter$ = observable<1 | 2 | 3 | null>(null)
