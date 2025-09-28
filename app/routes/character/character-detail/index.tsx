import { createFileRoute, Link, useSearch } from '@tanstack/react-router';
import { TCharacter, TDetailCharacter } from '../../../util/type';
import { useQuery } from '@tanstack/react-query'
import LoadingLogo from '@/components/LoadingLogo';
import { Button } from '@/components/ui/button';
import { BiLeftArrow } from 'react-icons/bi';
import IconImage from '../../../assets/image.webp'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Header from '@/components/Header';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { use$ } from '@legendapp/state/react';
import { characterList$ } from '@/stores/character';

export const Route = createFileRoute('/character/character-detail/')({
  component: Detail,
});

function Detail() {
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
      // const regex = new RegExp(`^${search}(\\s|\\(|$)`, 'i');
      // const filteredData = characterDetailData.data.filter((character) =>
      //   regex.test(character.name)
      // );
      return characterDetailData.data;
    },
    staleTime: 1000 * 60 * 60 * 24 * 90,
    enabled: search !== '',
  });

  const list = use$(characterList$)

  const currentIndex = list.indexOf(search)
  const prevName = list[currentIndex - 1] || null
  const nextName = list[currentIndex + 1] || null

  console.log({ prevName, nextName })

  return (
    <div className="flex flex-col min-h-screen bg-slate-200">
      <Header/>
      
      <div className="block w-full">
        {data?.length > 0 && !isLoading ? (
          <div className="w-full px-6 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Karakter utama */}
              <AspectRatio ratio={12/10} className="bg-white shadow-md rounded-xl p-4 text-center mx-auto">
                <div className="flex flex-col items-center">
                  <h1 className="text-xl font-bold">{data[0].name}</h1>
                  <p className="text-gray-600">School: {data[0].school}</p>
                  <p className="text-gray-600">Birthday: {data[0].birthday}</p>
                  <img
                    src={data[0].photoUrl}
                    alt={data[0].name}
                    className="w-56 h-56 object-cover rounded-lg mt-3"
                  />
                </div>
              </AspectRatio>

              {/* Variants */}
              {data.length > 1 && (
                <AspectRatio ratio={12/10} className="bg-white shadow-md rounded-xl p-4 text-center mx-auto">
                  <h2 className="text-lg font-semibold mb-3">Variants</h2>
                  <Carousel className="mt-2">
                    <CarouselContent>
                      {data.slice(1).map((variant) => (
                        <CarouselItem key={variant._id}>
                          <div className="bg-white shadow-md rounded-xl p-4 text-center">
                            <h3 className="text-md font-bold">{variant.name}</h3>
                            <p className="text-gray-600">School: {variant.school}</p>
                            <p className="text-gray-600">Birthday: {variant.birthday}</p>
                            <img
                              src={variant.photoUrl}
                              alt={variant.name}
                              className="w-56 h-56 object-cover rounded-lg mx-auto mt-3"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                </AspectRatio>
              )}
            </div>
          </div>
        ) : (
          <LoadingLogo />
        )}

      </div>
    </div>
  );
}