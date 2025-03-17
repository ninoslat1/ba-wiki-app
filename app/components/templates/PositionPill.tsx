import React from 'react'
import { Button } from '../ui/button'

interface IPosition {
    position: string
}


const PositionPill = ({position}: IPosition) => {
  return (
    <Button className="bg-[#dce1e6]/50 text-black font-gothic italic font-bold uppercase rounded-full tracking-widest hover:bg-[#dce1e6]/50 w-22">
        {position}
    </Button>
  )
}

export default PositionPill