import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'

const StarRarity = ({baseStar} : {baseStar: number}) => {
  return (
    <>
        {[...Array(3)].map((_, index) =>
            index < baseStar ? (
                <FaStar key={index} className="text-yellow-400" />
            ) : (
                <FaRegStar key={index} className="text-gray-400" />
            ),
        )}
    </>
  )
}

export default StarRarity