import Image from 'next/image'
import MenuItem from './MenuItem'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { Link } from '@mui/material'

async function Menu() {

  const session = await getServerSession(authOptions)

  return (
    <div className="h-16 w-screen bg-slate-100 fixed top-0 right-0 z-30  flex flex-row-reverse">
        <Image src={'/logo.png'} className="h-full w-auto" alt='logo' width={0} height={0} sizes="100vh" />
        <MenuItem title='Booking' pageRef='/booking' />
        <MenuItem title='Hospitals' pageRef='/hospital'/>
        {
          session? 
          <div>
            <Link href="/api/auth/signout">
            <div className='flex items-center absolute left-5 h-full px-2
            text-cyan-600 hover:bg-slate-300'>Sign-Out of {session.user?.name}</div> 
            </Link>
            <div className='flex items-center absolute left-52 h-full px-2'>
              <MenuItem title='My Booking' pageRef='/mybooking' />
            </div> 
          </div>
          :
          <div>
            <Link href="/api/auth/signin">
            <div className='flex items-center absolute left-5 h-full px-2
            text-cyan-600 hover:bg-slate-300'>Sign-In
            </div> 
            </Link>
            <div className='flex items-center absolute left-20 h-full px-2'>
              <MenuItem title='My Booking' pageRef='/mybooking' />
            </div> 
          </div>
          
        }
        
    </div>
  )
}

export default Menu