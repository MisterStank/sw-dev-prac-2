import React from 'react'
import Image from 'next/image'

export default function HospitalDetailPage({ params }: { params: { hid: string } }) {

    const mockHospitalRepo = new Map()
    mockHospitalRepo.set("001", { name: "Chulalongkorn Hospital", image: "/chula.jpg" })
    mockHospitalRepo.set("002", { name: "Rajavithi Hospital", image: "/rajavithi.jpg" })
    mockHospitalRepo.set("003", { name: "Thammasat University Hospital", image: "/thammasat.jpg" })

    return (
        <main className='text-center p-5 font-sans'>
            <h1 className='text-lg font-medium'>Hospital ID {params.hid}</h1>
            <div className='flex flex-row my-5 font-semibold text-xl'>
                <Image src={(mockHospitalRepo.get(params.hid)).image}
                    alt='Hospital picture'
                    width={0} height={0} sizes="100vw"
                    className='rounded-lg w-[30%] bg-black' />
                <div className='text-md mx-5'>{(mockHospitalRepo.get(params.hid)).name}</div>
            </div>
        </main>
    )
}

export async function generalStaticParams() {
    return [{ hid: '001' }, { hid: '002' }, { hid: '003' }]
}