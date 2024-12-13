import * as fs from 'node:fs'
import { createFileRoute, useRouter } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/start'
import { useEffect } from 'react'
import { getCharacterData } from '../functions/server'

const characterData = createServerFn({method: "GET"}).handler( async () => {
  const data = await getCharacterData()
  return data
})

export const Route = createFileRoute('/')({
  component: Home,
  loader: async () => await characterData(),
})

function Home() {
  const router = useRouter()
  const state = Route.useLoaderData()

  console.log(state[Math.ceil(Math.random() * 100)])
  return (
    <>
      <p>Test</p>
    </>
  )
}