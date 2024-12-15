import { createFileRoute, useSearch } from '@tanstack/react-router'
import { TCharacter } from '../../../util/type'
import { getCharacterDetailData } from '../../../functions/server';

export const Route = createFileRoute('/character/character-detail/')({
  component: Detail,
})

async function Detail() {
  const search = useSearch({ from: '/character/character-detail/', select: (search: TCharacter) => search.name})
  const characterDetailData = await getCharacterDetailData({data: search});
  console.log(characterDetailData)
  return <div>Hello {search}!</div>
}
