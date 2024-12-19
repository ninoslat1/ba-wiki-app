import { createFileRoute, useSearch } from '@tanstack/react-router';
import { TCharacter, TDetailCharacter } from '../../../util/type';
import { useEffect, useState } from 'react';

export const Route = createFileRoute('/character/character-detail/')({
  component: Detail,
});

function Detail() {
  const [data, setData] = useState<TDetailCharacter[] | null>(null);
  const search = useSearch({
    from: '/character/character-detail/',
    select: (search: TCharacter) => search.name,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api-blue-archive.vercel.app/api/characters?name=${search}`, {
          method: 'GET',
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const characterDetailData = await response.json();
        const regex = new RegExp(`^${search}(\\s|\\(|$)`, 'i');
        const filteredData = characterDetailData.data.filter((character) =>
          regex.test(character.name)
        );

        setData(filteredData);
      } catch (error) {
        console.error('Error fetching character details:', error);
      }
    };

    fetchData();
  }, [search]);

  return (
    <div>
      {data ? (
        data.map(character => (
          <div key={character._id}>
            <h1>{character.name}</h1>
            <p>School: {character.school}</p>
            <p>Birthday: {character.birthday}</p>
            <img src={character.photoUrl} alt={character.name} />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}