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
  const totalPages = Math.ceil(filteredState.length / items);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 gap-10 p-4 flex-grow">
          {currentData.map((data) => (
            <div className="card card-image-cover h-80" key={data.id}>
              <div className="card-body">
                <h2 className="card-header">{data.name}</h2>
                <div className="flex">
                  {[...Array(5)].map((_, index) =>
                    index < data.baseStar ? (
                      <FaStar key={index} color="gold" />
                    ) : (
                      <FaRegStar key={index} color="gray" />
                    )
                  )}
                </div>
                <p className="text-content2 line-clamp-6">{data.profile}</p>
                <div className="card-footer">
                  <Link to={`/character/character-detail`} search={{ name: data.name }}>
                    <button className="btn btn-outline-primary">Detail</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination pagination-compact pagination-bordered flex justify-center gap-2 mt-4 p-4">
          <button
            className="btn"
            disabled={page === 1}
            onClick={() => handlePageChange(page - 1)}
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2574 5.59165C11.9324 5.26665 11.4074 5.26665 11.0824 5.59165L7.25742 9.41665C6.93242 9.74165 6.93242 10.2667 7.25742 10.5917L11.0824 14.4167C11.4074 14.7417 11.9324 14.7417 12.2574 14.4167C12.5824 14.0917 12.5824 13.5667 12.2574 13.2417L9.02409 9.99998L12.2574 6.76665C12.5824 6.44165 12.5741 5.90832 12.2574 5.59165Z" fill="#969696" />
            </svg>
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              className={`btn ${page === index + 1 ? "btn-primary" : "bg-slate-800 hover:btn-primary"}`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="btn"
            disabled={page === totalPages}
            onClick={() => handlePageChange(page + 1)}
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.74375 5.2448C7.41875 5.5698 7.41875 6.0948 7.74375 6.4198L10.9771 9.65314L7.74375 12.8865C7.41875 13.2115 7.41875 13.7365 7.74375 14.0615C8.06875 14.3865 8.59375 14.3865 8.91875 14.0615L12.7437 10.2365C13.0687 9.91147 13.0687 9.38647 12.7437 9.06147L8.91875 5.23647C8.60208 4.9198 8.06875 4.9198 7.74375 5.2448Z" fill="#969696" />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}
