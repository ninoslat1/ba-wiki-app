import { createFileRoute, useSearch } from '@tanstack/react-router'
import { TCharacter } from '../../../util/type'

export const Route = createFileRoute('/character/character-detail/')({
  component: Detail,
})

function Detail() {
  const search = useSearch({ from: '/character/character-detail/', select: (search: TCharacter) => search.name})
  
  return <div>Hello {search}!</div>
}
