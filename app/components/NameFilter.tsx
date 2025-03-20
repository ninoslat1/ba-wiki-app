import { nameFilter$ } from "@/stores/filter"
import { use$ } from "@legendapp/state/react"

export const NameFilterInput = () => {
    const nameFilter = use$(nameFilter$)
    
    return (
      <input
        type="text"
        placeholder="Type the character name"
        value={nameFilter}
        onChange={(e) => nameFilter$.set(e.target.value)}
        className="p-2 border border-gray-300 rounded mb-4 w-full"
      />
    )
  }