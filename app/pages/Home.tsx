import { Link } from '@tanstack/react-router'
import { BiHeartCircle } from 'react-icons/bi'
import HeroImage from '../assets/download.webp'
import IconImage from '../assets/image.webp'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FaPeopleArrows } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-10 bg-slate-900/30 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/">
              <img src={IconImage} alt="Logo" width={150} height={50} />
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="relative h-screen overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={HeroImage}
              alt="Blue Archive Hero Image"
              className='object-cover min-h-screen'
            />
          </div>
          <div className="absolute inset-0 bg-black/90 font-fira">
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
              <h1 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-[#63d7f7] to-white bg-clip-text text-transparent px-4">
                Welcome to Blue Archive Wiki App
              </h1>
              <p className="text-lg max-w-3xl py-2 text-center px-4">
              Dive into the vibrant world of <b className='uppercase'>Blue Archive</b>, a captivating mobile RPG that combines strategic gameplay with deep storytelling. 
              </p>
              <p className="text-lg max-w-3xl py-2 text-center px-4">
              This wiki is your comprehensive resource for all things related to Blue Archive, offering detailed information about characters, gameplay mechanics, events, and more
              </p>
              <div className='w-full py-5 flex justify-around mx-auto'>
              <Link to="/character" className="group w-48 hover:cursor-pointer">
                  <Card className="h-35 p-4 shadow-lg border-0 transition duration-200 group-hover:shadow-xl group-hover:bg-mystic">
                    <CardHeader>
                      <CardTitle className="font-bold text-xs text-center transition duration-200 group-hover:text-white">
                        Character List
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center transition duration-200 group-hover:text-white">
                      <FaPeopleArrows size={36} />
                    </CardContent>
                  </Card>
                </Link>
                  <div className='flex flex-col gap-2 items-center justify-center max-w-3xl'>
                      
                  </div>
                  <div className='flex flex-col gap-2 items-center justify-center max-w-3xl'>
                      
                  </div>
                  <div className='flex flex-col gap-2 items-center justify-center max-w-3xl'>
                      
                  </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    <footer className="footer footer-center p-4 text-base-content fixed 
             inset-x-0 
             bottom-0">
        <p className='flex items-center gap-2'>Made with <span><BiHeartCircle/></span> by Benedict Ell Nino</p>
    </footer>
  </div>
  )
}