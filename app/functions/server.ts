import { createServerFn } from "@tanstack/start";
import * as fs from 'node:fs'
import path from "node:path";
import { TCharacter, TDetailCharacterList } from "../util/type";

export const getCharacterData = createServerFn({method: "GET"}).handler(async () => {
    const jsonData = await fs.promises.readFile("./app/assets/character.json", 'utf-8');
    return JSON.parse(jsonData) as TCharacter[]
})

export const getCharacterDetailData = createServerFn<"GET", TDetailCharacterList>({method: 'GET'}).validator((data: string) => data).handler(async (ctx) => {
    return `Hello, ${ctx.data}`
    // const data = await fetch(`${process.env.BACKEND_URL}characters?name=${name}`);
    // const response = await data.json();
    // return response;
  });
