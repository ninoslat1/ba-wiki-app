import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { BiBook } from 'react-icons/bi'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-10 bg-slate-900/30 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/">
              <img src="./app/assets/image.webp" alt="Logo" width={150} height={50} />
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="relative h-screen overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/app/assets/download.webp"
              alt="Blue Archive Hero Image"
            />
          </div>
          <div className="absolute inset-0 bg-black/75">
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
              <h1 className="text-6xl font-bold mb-4 text-center bg-gradient-to-r from-[#63d7f7] to-white bg-clip-text text-transparent px-4">
                Welcome to Blue Archive Wiki App
              </h1>
              <p className="text-xl max-w-3xl py-2 text-center px-4">
              Dive into the vibrant world of <b className='uppercase'>Blue Archive</b>, a captivating mobile RPG that combines strategic gameplay with deep storytelling. 
              </p>
              <p className="text-xl max-w-3xl py-2 text-center px-4">
              This wiki is your comprehensive resource for all things related to Blue Archive, offering detailed information about characters, gameplay mechanics, events, and more
              </p>
              <motion.div className='w-full flex justify-around' initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{once: true}}>
                <Link href='/character'>
                  <button className='flex flex-col gap-2 items-center justify-center max-w-3xl group'>
                      <div className="bg-[#446ab3] group-hover:bg-[#cad8f1] duration-200 text-black h-12 w-12 flex items-center justify-center rounded-full">
                          <BiBook size={24} className="rounded-full" />
                      </div>
                      <p className="ml-2 font-bold text-xl">Character List</p>
                  </button>
                </Link>
                <div className='flex flex-col gap-2 items-center justify-center max-w-3xl'>
                    
                </div>
                <div className='flex flex-col gap-2 items-center justify-center max-w-3xl'>
                    
                </div>
                <div className='flex flex-col gap-2 items-center justify-center max-w-3xl'>
                    
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-4">About Us</h2>
            <p className="text-lg">We are a passionate team dedicated to creating amazing experiences for Blue Archive fans.</p>
          </div>
        </section>
      </main>

    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
      <div>
        <p>Copyright © 2023 - All rights reserved</p>
      </div>
    </footer>
  </div>
  )
}
