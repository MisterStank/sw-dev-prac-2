import Image from 'next/image'
import MenuItem from './MenuItem'

function Menu() {
  return (
    <div className="h-16 w-screen bg-slate-100 fixed top-0 right-0 z-30 border-t-2 border-b-2 border-slate-500 flex flex-row-reverse">
        <Image src={'/logo.png'} className="h-full w-auto" alt='logo' width={0} height={0} sizes="100vh" />
        <MenuItem title='Booking' pageRef='/booking' />
    </div>
  )
}

export default Menu