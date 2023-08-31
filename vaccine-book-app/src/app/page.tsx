import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/components/Banner'
import Card from '@/components/Card'

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <div style={{
        margin: "20px", display: "flex",
        flexDirection: "row", alignContent: "space-around",
        justifyContent: "space-around", flexWrap: "wrap"
      }}>
        <Card hospitalName='Chulalongkorn Hospital' imgSrc='/chula.jpg' description='1873 Rama IV Rd, Khwaeng Pathum Wan, Khet Pathum Wan, Krung Thep Maha Nakhon 10330'/>
        <Card hospitalName='Rajavithi Hospital' imgSrc='/rajavithi.jpg' description='2 Phaya Thai Rd, Khwaeng Thung Phaya Thai, Khet Ratchathewi, Krung Thep Maha Nakhon 10400'/>
        <Card hospitalName='Thammasat University Hospital' imgSrc='/thammasat.jpg' description='95/8 Phaholyothin Frontage Rd, Tambon Khlong Nung, Amphoe Khlong Luang, Chang Wat Pathum Thani 12120'/>
      </div>
    </main>
  )
}
