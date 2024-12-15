import { createFileRoute, Link } from '@tanstack/react-router'
import { getCharacterData } from '../../functions/server'

export const Route = createFileRoute('/character/')({
  component: Home,
  loader: async () => await getCharacterData(),
})

function Home() {
  const state = Route.useLoaderData()
  const filteredState = state.filter(
    (data) => !data.name.includes('(')
  );

  return (
    <div className="grid grid-cols-6 gap-10">
      {filteredState.map((data) => (
        <div className="card card-image-cover" key={data.id}>
          <div className="card-body">
            <h2 className="card-header">{data.name}</h2>
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
