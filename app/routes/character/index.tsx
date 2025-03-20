import { createFileRoute, Link } from '@tanstack/react-router'
import { getCharacterData } from '../../functions/server'
import { FaStar, FaRegStar } from 'react-icons/fa'
import { useEffect, useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'
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
import ExplosiveIcon from '@/components/icons/attack/ExplosiveIcon'
import BulletType from '@/components/templates/BulletType'
import ArmorType from '@/components/templates/ArmorType'
import PositionPill from '@/components/templates/PositionPill'
import { attackFilter$, nameFilter$ } from '@/stores/filter'
import { use$ } from '@legendapp/state/react'
import { LazyTrie } from '@/util/lazy-expand.trie'
// import { Trie } from '@/util/trie'

export const Route = createFileRoute('/character/')({
  component: Home,
  loader: async () => await getCharacterData(),
})

function Home() {
  const items = 14
  const state = Route.useLoaderData()
  const filteredState = state.filter((data) => !data.name.includes('('))
  const [page, setPage] = useState(1)
  const attackFilter = use$(attackFilter$);
  const nameFilter = use$(nameFilter$)
  const startIndex = (page - 1) * items

  const trie = useMemo(() => {
    const t = new LazyTrie()
    filteredState.forEach((char) => t.insert(char.name))
    return t
  }, [filteredState])

  const filteredName = useMemo(() => {
    return nameFilter ? trie.search(nameFilter) : filteredState.map((char) => char.name)
  },[nameFilter, trie])

  const data = useMemo(() => {
    return filteredState.filter((char) => {
      const atkFilter = attackFilter ? char.bulletType === attackFilter : true
      const nameFilter = filteredName.includes(char.name)
      return nameFilter && atkFilter
    });
  }, [filteredState, filteredName, attackFilter]);

  const totalPages = Math.ceil(data.length / items)
  const currentData = data.slice(startIndex, startIndex + items);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage)
    }
  }

  useEffect(() => {
    setPage(1);
  }, [attackFilter, nameFilter]);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="grid gap-6 auto-rows-auto grid-cols-[repeat(auto-fill,minmax(200px,1fr))] p-4 flex-grow">
          {currentData.map((data) => (
            <Card
              key={data.id}
              className="h-80 flex flex-col justify-between shadow-lg"
            >
              <CardHeader>
                <CardTitle>{data.name}</CardTitle>
                <div className="flex items-center justify-start gap-2">
                  <BulletType bulletType={data.bulletType} />
                  <ArmorType armorType={data.armorType} />
                </div>
                {/* <PositionPill position={data.position}/> */}
              </CardHeader>
              <CardContent>
                <p className="line-clamp-6 text-sm text-gray-700">
                  {data.profile}
                </p>
              </CardContent>
              <CardFooter className="justify-between gap-5">
                <div className="flex">
                  {[...Array(3)].map((_, index) =>
                    index < data.baseStar ? (
                      <FaStar key={index} className="text-yellow-400" />
                    ) : (
                      <FaRegStar key={index} className="text-gray-400" />
                    ),
                  )}
                </div>
                <Link
                  to={`/character/character-detail`}
                  search={{ name: data.name }}
                  className="w-full"
                >
                  <Button className="w-full hover:cursor-pointer">
                    Detail
                  </Button>
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
                className={
                  page === totalPages ? 'pointer-events-none opacity-50' : ''
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  )
}
