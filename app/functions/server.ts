import { createServerFn } from "@tanstack/start";
import { TCharacter, TDetailCharacterList } from "../util/type";
import CharacterData from '../assets/character.json';

export const getCharacterData = createServerFn({ method: "GET" }).handler(async () => {
    return CharacterData as TCharacter[];
});

export const getCharacterDetailDataFn = async (name: string): Promise<TDetailCharacterList> => {
    const response = await fetch(`${process.env.BACKEND_URL}characters?name=${name}`);
    return await response.json();
};