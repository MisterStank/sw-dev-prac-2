import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'

function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.cardimg}>
        <Image src={'/vaccinate.jpg'}
          alt='information card'
          fill={true}
          objectFit='scale-down' />
      </div>
      <div>
        <div className={styles.cardtexthead}>รู้ให้ชัดก่อนฉีดวัคซีน COVID-19</div>
        <div className={styles.cardtext}>การฉีดวัคซีน COVID-19 ได้รับการยืนยันแล้วว่าช่วยสร้างภูมิคุ้มกันโรค COVID-19 ได้อย่างมีประสิทธิภาพ โดยจะต้องทำควบคู่ไปกับการสวมหน้ากาก เว้นระยะห่าง ล้างมือให้บ่อย และเลี่ยงพื้นที่แออัด ดังนั้นก่อนฉีดวัคซีน COVID-19 ควรรู้และเข้าใจข้อมูลให้ถูกต้อง</div>
      </div>
    </div>
  )
}

export default Card