import { createFileRoute, Link } from '@tanstack/react-router'
import { getCharacterData } from '../../functions/server'
import ListPage from '@/pages/List'

export const Route = createFileRoute('/character/')({
  component: () => {
    const state = Route.useLoaderData()
    return <ListPage state={state} />
  },
  loader: async () => await getCharacterData(),
})
