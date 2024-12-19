import { createServerFn } from "@tanstack/start";
import * as fs from 'node:fs'
import path from "node:path";
import { TCharacter, TDetailCharacterList } from "../util/type";

export const getCharacterData = createServerFn({method: "GET"}).handler(async () => {
    const jsonData = await fs.promises.readFile("./app/assets/character.json", 'utf-8');
    return JSON.parse(jsonData) as TCharacter[]
})

export const getCharacterDetailDataFn = async (name: string): Promise<TDetailCharacterList> => {
    const response = await fetch(`${process.env.BACKEND_URL}characters?name=${name}`);
    return await response.json();
};