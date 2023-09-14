
import styles from './card.module.css'
import Image from 'next/image'
import InteractiveCard from './InteractiveCard'
import Rating from '@mui/material/Rating';
import { useState } from 'react'

function Card({ hospitalName, description, imgSrc, onCompare , rating}: { hospitalName: string, description: string, imgSrc: string, onCompare:Function, rating:number}) {
  //const [value, setValue] = useState<number | null>(0);
  return (
    <InteractiveCard>
      <div className='w-full h-[70%] relative rounded-t-lg'> 
          <Image src={imgSrc}
            alt='hospital card'
            fill={true}
            className='object-cover rounded-t-lg' />
      </div>
      <div className='w-full h-[30%] p-[20px] font-sans font-bold text-#333 text-md'>{hospitalName}
        <Rating className='ml-1'
          name="rating"
          value={rating}
          onChange={(e, newValue) => {
            e.stopPropagation()
            onCompare(
                hospitalName,
                newValue
            )
          }}
        />
      </div>
      
    </InteractiveCard>
  )
}

export default Card