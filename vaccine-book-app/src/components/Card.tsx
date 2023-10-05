
import styles from './card.module.css'
import Image from 'next/image'
import InteractiveCard from './InteractiveCard'
import Rating from '@mui/material/Rating';
import { useState } from 'react'

function Card({ hospitalName, imgSrc, onCompare}: { hospitalName: string, imgSrc: string, onCompare:Function}) {
  
  return (
    <InteractiveCard>
      <div className='w-full h-[70%] relative rounded-t-lg'
        onClick={(e)=>{e.preventDefault(); onCompare(hospitalName)}}> 
          <Image src={imgSrc}
            alt='hospital card'
            fill={true}
            className='object-cover rounded-t-lg' />
      </div>
      <div className='w-full h-[30%] p-[20px] font-sans font-bold text-#333 text-md'>{hospitalName}
      </div>
      
    </InteractiveCard>
  )
}

export default Card