import { createFileRoute, Link } from '@tanstack/react-router'
import { getCharacterData } from '../../functions/server'
import { FaStar, FaRegStar } from 'react-icons/fa'
import { useState } from 'react'

export const Route = createFileRoute('/character/')({
  component: Home,
  loader: async () => await getCharacterData(),
})

function Home() {
  const items = 10
  const state = Route.useLoaderData()
  const filteredState = state.filter((data) => !data.name.includes('('));
  const [page, setPage] = useState(1)

  const startIndex = (page - 1) * items
  const currentData = filteredState.slice(startIndex, startIndex + items);

  const handlePageChange = (page) => {
    setPage(page);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 gap-10 p-4">
      {filteredState.map((data) => (
        <div className="card card-image-cover" key={data.id}>
          <div className="card-body">
          
            <h2 className="card-header">{data.name}</h2>
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                index < data.baseStar ? (
                  <FaStar key={index} color="gold" />
                ) : (
                  <FaRegStar key={index} color="gray" />
                )
              ))}
            </div>
            <p className="text-content2 line-clamp-6">{data.profile}</p>
            <div className="card-footer">
                <Link to={`/character/character-detail`} search={{name: data.name}}>
                    <button className="btn-secondary btn">Detail</button>
                </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
