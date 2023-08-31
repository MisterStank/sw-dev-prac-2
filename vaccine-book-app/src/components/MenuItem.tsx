import styles from './menu.module.css'
import Link from 'next/link'

function MenuItem({title,pageRef}:{title:string, pageRef:string}) {
  return (
    <Link className={styles.itemcontainer} href={pageRef}>
    {title}
    </Link>
  )
}

export default MenuItem