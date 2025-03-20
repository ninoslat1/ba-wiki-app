import { TDetailCharacterList } from '@/util/type'
import { createAPIFileRoute } from '@tanstack/start/api'

export const APIRoute = createAPIFileRoute('/api/students/$name')({
  GET: async ({ request, params }) => {
    const { name } = params
    const apiUrl = import.meta.env.VITE_BACKEND_URL
    try {
      const uri = `${apiUrl}characters?name=${encodeURIComponent(name)}`
      const response = await fetch(uri)
      
      if (!response.ok) {
        return new Response(JSON.stringify({ error: "Internal Server Error" }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        })
      }

      const data: TDetailCharacterList = await response.json()

      if (data.message !== "success") {
        return new Response(JSON.stringify({ error: "Internal Server Error" }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        })
      } 
      
      if (data.data.length === 0) {
        return new Response(JSON.stringify({ error: `Student ${name} not found` }), {
          status: 404, // ⬅️ Kode 404 untuk Not Found
          headers: { 'Content-Type': 'application/json' },
        })
      } 
      
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      })

    } catch (error) {
      return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      })
    }
  },
})
