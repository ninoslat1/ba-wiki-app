import React from 'react'
import { BiLeftArrow } from 'react-icons/bi'
import { Button } from './ui/button'
import { Link } from '@tanstack/react-router'
import IconImage from '@/assets/image.webp'

const Header = () => {
  return (
    <div className="bg-slate-900 shadow-lg">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            <Button className='bg-transparent text-white hover:text-blue-300 hover:bg-transparent duration-500'><BiLeftArrow/></Button>
            <Link to="/">
              <img src={IconImage} alt="Logo" width={150} height={50} />
            </Link>
          </div>
        </div>
      </div>
  )
}

export default Header