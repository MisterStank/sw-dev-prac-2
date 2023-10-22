'use client'
import React from 'react'
import styles from './banner.module.css'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

function Banner() {
  const covers = ['/cover.jpg', '/cover2.jpg', '/cover3.jpg', '/vaccinate.jpg']
  const [index, setIndex] = useState(0)
  const router = useRouter()
  const { data:session } = useSession()
  console.log(session?.user.token)

  return (
    <div className={styles.banner} onClick={() => setIndex(index + 1)}>
      <Image src={covers[index % 4]}
        alt='cover'
        fill={true}
        objectFit='cover'
      />
      <div className={styles.bannerText}>
        <h1>ฉีดวัคซีนป้องกันโรคร้าย</h1>
        <h3>ณ โรงพยาบาลใกล้คุณ</h3>
      </div>
      {
        session? <div className='z-30 absolute top-5 right-10 font-semibold text-cyan-800 text-x1'>
        Hello {session.user?.name}</div>:null
      }
      <button className='bg-white text-green-700 border border-green-700
      font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0
      hover:bg-green-700 hover:text-white hover:border-transparent'
        onClick={(e) => { e.stopPropagation(); router.push('/hospital') }}>
        Select the hospital
      </button>
    </div>
  )
}

export default Banner