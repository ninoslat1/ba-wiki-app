import { observable } from "@legendapp/state";

export const attackFilter$ = observable<"Explosive" | "Mystic" | "Piercing" | "Sonic" | null>(null);
