// src/pages/CharacterListPage.tsx
import { useEffect, useMemo, useState } from 'react'
import { use$ } from '@legendapp/state/react'
import {
  attackFilter$,
  defenseFilter$,
  nameFilter$,
  starFilter$,
} from '@/stores/filter'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { Button } from '@/components/ui/button'
import BulletType from '@/components/templates/BulletType'
import ArmorType from '@/components/templates/ArmorType'
import { LazyTrie } from '@/util/lazy-expand.trie'
import StarRarity from '@/components/templates/StarRarity'
import { Link } from '@tanstack/react-router'
import { TCharacter } from '@/util/type'

export default function ListPage({ state }: {state: TCharacter[]}) {
  const items = 14
  const filteredState = state.filter((data) => !data.name.includes('('))
  const [page, setPage] = useState(1)
  const attackFilter = use$(attackFilter$)
  const nameFilter = use$(nameFilter$)
  const defenseFilter = use$(defenseFilter$)
  const starFilter = use$(starFilter$)
  const startIndex = (page - 1) * items

  const trie = useMemo(() => {
    const t = new LazyTrie()
    filteredState.forEach((char) => t.insert(char.name))
    return t
  }, [filteredState])

  const filteredName = useMemo(() => {
    return nameFilter ? trie.search(nameFilter) : filteredState.map((char) => char.name)
  }, [nameFilter, trie])

  const data = useMemo(() => {
    return filteredState.filter((char) => {
      const atkFilter = attackFilter ? char.bulletType === attackFilter : true
      const defFilter = defenseFilter ? char.armorType === defenseFilter : true
      const strFilter = starFilter ? char.baseStar === starFilter : true
      const nameFilter = filteredName.includes(char.name)
      return nameFilter && atkFilter && defFilter && strFilter
    })
  }, [filteredState, filteredName, attackFilter, defenseFilter, starFilter])

  const totalPages = Math.ceil(data.length / items)
  const currentData = data.slice(startIndex, startIndex + items)

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage)
    }
  }

  useEffect(() => {
    setPage(1)
  }, [attackFilter, nameFilter, defenseFilter, starFilter])

  return (
    <div className="flex flex-col min-h-screen">
      <div className="grid gap-6 auto-rows-auto grid-cols-[repeat(auto-fill,minmax(200px,1fr))] p-4 flex-grow">
        {currentData.map((data) => (
          <Card key={data.id} className="h-80 flex flex-col justify-between shadow-lg">
            <CardHeader>
              <CardTitle>{data.name}</CardTitle>
              <div className="flex items-center justify-start gap-2">
                <BulletType bulletType={data.bulletType} />
                <ArmorType armorType={data.armorType} />
              </div>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-6 text-sm text-gray-700">{data.profile}</p>
            </CardContent>
            <CardFooter className="justify-between gap-5">
              <div className="flex">
                <StarRarity baseStar={data.baseStar} />
              </div>
              <Link to={`/character/character-detail`} search={{ name: data.name }} className="w-full">
                <Button className="w-full hover:cursor-pointer">Detail</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Pagination className="flex justify-center gap-2 p-2">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault()
                if (page > 1) handlePageChange(page - 1)
              }}
              className={page === 1 ? 'pointer-events-none opacity-50' : ''}
            />
          </PaginationItem>

          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem key={index + 1}>
              <PaginationLink
                className="hover:cursor-pointer"
                isActive={page === index + 1}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault()
                if (page < totalPages) handlePageChange(page + 1)
              }}
              className={page === totalPages ? 'pointer-events-none opacity-50' : ''}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
