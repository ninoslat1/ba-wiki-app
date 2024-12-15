import { createFileRoute, Link } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/start'
import { getCharacterData } from '../../functions/server'

const characterData = createServerFn({ method: 'GET' }).handler(async () => {
  const data = await getCharacterData()
  return data
})

export const Route = createFileRoute('/character/')({
  component: Home,
  loader: async () => await characterData(),
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
