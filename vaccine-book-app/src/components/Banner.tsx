import React from 'react'
import styles from './banner.module.css'
import Image from 'next/image'

function Banner() {
  return (
    <div className={styles.banner}>
      <Image src={'/cover.jpg'}
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