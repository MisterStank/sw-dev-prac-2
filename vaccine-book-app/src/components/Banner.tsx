'use client'
import React from 'react'
import styles from './banner.module.css'
import Image from 'next/image'
import { useState } from 'react'

function Banner() {
  const covers = ['/cover.jpg','/cover2.jpg','/cover3.jpg','/vaccinate.jpg']
  const [index,setIndex] = useState(0)
  return (
    <div className={styles.banner} onClick={()=>setIndex(index+1)}>
      <Image src={covers[index%4]}
        alt='cover'
        fill={true}
        objectFit='cover'
      />
      <div className={styles.bannerText}>
        <h1>ฉีดวัคซีนป้องกันโรคร้าย</h1>
        <h3>ณ โรงพยาบาลใกล้คุณ</h3>
      </div>
    </div>
  )
}

export default Banner