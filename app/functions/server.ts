import { createServerFn } from "@tanstack/start";
import * as fs from 'node:fs'
import path from "node:path";
import { TCharacter } from "../util/type";

export const getCharacterData = createServerFn().handler(async () => {
    const jsonData = await fs.promises.readFile("./app/assets/character.json", 'utf-8');
    return JSON.parse(jsonData) as TCharacter[]
})