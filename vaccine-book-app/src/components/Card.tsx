import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import InteractiveCard from './InteractiveCard'

function Card({ hospitalName, description, imgSrc }: { hospitalName: string, description: string, imgSrc: string }) {
  return (
    <InteractiveCard>
      <div className='w-full h-[70%] relative rounded-t-lg'> 
          <Image src={imgSrc}
            alt='hospital card'
            fill={true}
            className='object-cover rounded-t-lg' />
      </div>
      <div className='w-full h-[30%] p-[20px] font-sans font-bold text-#333 text-lg'>{hospitalName}</div>
    </InteractiveCard>
  )
}

export default Card