import { createFileRoute, useSearch } from '@tanstack/react-router';
import { TCharacter, TDetailCharacter } from '../../../util/type';
import { useQuery } from '@tanstack/react-query'
import LoadingLogo from '@/components/LoadingLogo';

export const Route = createFileRoute('/character/character-detail/')({
  component: Detail,
});

function Detail() {
  const apiUrl = import.meta.env.VITE_BACKEND_URL
  const search = useSearch({
    from: '/character/character-detail/',
    select: (search: TCharacter) => search.name,
  });

  const { data, isLoading } = useQuery({
    retry: false,
    refetchOnWindowFocus: false,
    queryKey: ['characters', search],
    queryFn: async () => {
      const response = await fetch(`/api/students/${encodeURIComponent(search)}`, {
        method: 'GET',
      });

      if (response.status === 505) {
        throw new Error('Internal Server Error');
      }

      if(response.status === 404){
        throw new Error("Student not found");
      }

      const characterDetailData = await response.json();
      const regex = new RegExp(`^${search}(\\s|\\(|$)`, 'i');
      const filteredData = characterDetailData.data.filter((character) =>
        regex.test(character.name)
      );

      return filteredData;
    },
    staleTime: 1000 * 60 * 60 * 24 * 90,
    enabled: search !== '',
  });

  return (
    <>
      {data && !isLoading ? (
        data.map(character => (
          <div key={character._id}>
            <h1>{character.name}</h1>
            <p>School: {character.school}</p>
            <p>Birthday: {character.birthday}</p>
            <img src={character.photoUrl} alt={character.name} />
          </div>
        ))
      ) : (
        <LoadingLogo />
      )}
    </>
  );
}