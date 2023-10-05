'use client'
import { useReducer } from 'react'
import Card from "./Card"
import Link from 'next/link'

function CardPanel() {
    const compareReducer = (compareList: Set<string>, action: { type: string, hospitalName: string }) => {
        switch (action.type) {
            case 'add': {
                return new Set(compareList.add(action.hospitalName))
            }
            case 'remove': {
                compareList.delete(action.hospitalName)
                return new Set(compareList)
            }
            default: return compareList
        }
    }
    const [compareList, dispatchCompare] = useReducer(compareReducer, new Set<string>())

    const mockHospitalRepo = [{ hid: "001", name: "Chulalongkorn Hospital", image: "/chula.jpg" },
    { hid: "002", name: "Rajavithi Hospital", image: "/rajavithi.jpg" },
    { hid: "003", name: "Thammasat University Hospital", image: "/thammasat.jpg" }]

    return (
        <div>
            <div style={{
                margin: "20px", display: "flex",
                flexDirection: "row", alignContent: "space-around",
                justifyContent: "space-around", flexWrap: "wrap"
            }}>
                {
                    mockHospitalRepo.map((hospitalItem) => (
                        <Link href={`/hospital/${hospitalItem.hid}`} className="w-1/5">
                            <Card hospitalName={hospitalItem.name} imgSrc={hospitalItem.image}
                                onCompare={(hospital: string) => dispatchCompare({ type: 'add', hospitalName: hospital })}
                            />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default CardPanel