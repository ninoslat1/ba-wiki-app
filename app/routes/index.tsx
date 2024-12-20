import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-10 bg-background shadow-md">
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
          <div className="absolute inset-0 bg-black/50">
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
              <h1 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-[#63d7f7] to-white bg-clip-text text-transparent px-4">
                Welcome to Blue Archive Wiki App
              </h1>
              <p className="text-xl mb-8 text-center px-4">
                We're excited to have you here. Let's explore together!
              </p>
              <button className="bg-[#63d7f7] hover:bg-[#63d7f7]/80 text-black">
                Get Started
              </button>
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
