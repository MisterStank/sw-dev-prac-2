import Image from 'next/image'
import getHospital from '@/libs/getHospital'
import Link from 'next/link'

export default async function HospitalDetailPage({ params }: { params: { hid: string } }) {
/*
    const mockHospitalRepo = new Map()
    mockHospitalRepo.set("001", { name: "Chulalongkorn Hospital", image: "/chula.jpg" })
    mockHospitalRepo.set("002", { name: "Rajavithi Hospital", image: "/rajavithi.jpg" })
    mockHospitalRepo.set("003", { name: "Thammasat University Hospital", image: "/thammasat.jpg" })
*/
    const hospitalDetail = await getHospital(params.hid)
    return (
        <main className='text-center p-5 font-sans'>
            <h1 className='text-lg font-medium'>{hospitalDetail.data.name}</h1>
            <div className='flex flex-row my-5 font-normal text-xl'>
                <Image src={hospitalDetail.data.picture}
                    alt='Hospital picture'
                    width={0} height={0} sizes="100vw"
                    className='rounded-lg w-[30%] bg-black' />
                <div className='text-md text-left mx-5'>
                    {hospitalDetail.data.name}
                    <div>{hospitalDetail.data.address}</div>
                    <div>{hospitalDetail.data.province}</div>
                    <div>{hospitalDetail.data.postalcode}</div>
                    <div>Tel. {hospitalDetail.data.tel}</div>
                </div>
            </div>
            <Link href={`/booking?id=${params.hid}&model=${hospitalDetail.data.name}`}>
            <button className="my-5 block rounded-full bg-sky-600 hover:bg-indigo-600 
            px-5 py-2 text-white font-normal shadow-sm">
               Make Reservation
            </button>
            </Link>
        </main>
    )
}

export async function generalStaticParams() {
    return [{ hid: '001' }, { hid: '002' }, { hid: '003' }]
}