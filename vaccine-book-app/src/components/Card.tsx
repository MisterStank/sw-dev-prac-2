import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'

function Card({hospitalName,description, imgSrc}:{hospitalName:string, description:string, imgSrc:string}) {
  return (
    <div className={styles.card}>
      <div className={styles.cardimg}>
        <Image src={imgSrc}
          alt='hospital card'
          fill={true}
          objectFit='scale-down' />
      </div>
      <div>
        <div className={styles.cardtexthead}>{hospitalName}</div>
        <div className={styles.cardtext}>{description}</div>
      </div>
    </div>
  )
}

export default Card