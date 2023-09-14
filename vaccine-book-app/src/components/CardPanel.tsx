'use client'
import { useReducer } from 'react'
import Card from "./Card"

function CardPanel() {
    const compareReducer = (compareList: Map<string, number>, action: { type: string, hospitalName: string, rating: number }) => {
        switch (action.type) {
            case 'add': {
                return new Map(compareList.set(action.hospitalName, action.rating))
            }
            case 'remove': {
                compareList.delete(action.hospitalName)
                return new Map(compareList)
            }
            default: return compareList
        }
    }
    const [compareList, dispatchCompare] = useReducer(compareReducer, new Map<string, number>())

    return (
        <div>
            <div style={{
                margin: "20px", display: "flex",
                flexDirection: "row", alignContent: "space-around",
                justifyContent: "space-around", flexWrap: "wrap"
            }}>
                <Card hospitalName='Chulalongkorn Hospital' imgSrc='/chula.jpg' description=''
                    rating={compareList.get('Chulalongkorn Hospital') ?? 0}
                    onCompare={(hospital: string, rating: number) => dispatchCompare({ type: 'add', hospitalName: hospital, rating: rating })}
                />
                <Card hospitalName='Rajavithi Hospital' imgSrc='/rajavithi.jpg' description=''
                    rating={compareList.get('Rajavithi Hospital') ?? 0}
                    onCompare={(hospital: string, rating: number) => dispatchCompare({ type: 'add', hospitalName: hospital, rating: rating })}
                />
                <Card hospitalName='Thammasat University Hospital' imgSrc='/thammasat.jpg' description=''
                    rating={compareList.get('Thammasat University Hospital') ?? 0}
                    onCompare={(hospital: string, rating: number) => dispatchCompare({ type: 'add', hospitalName: hospital, rating: rating })}
                />
            </div>
            <div className="w-full text-2xl font-medium m-10">
                {Array.from(compareList).map(([hospital, rating]) =>
                    <div className='text-black pl-20' key={hospital}
                        onClick={() => {
                            dispatchCompare({ type: 'remove', hospitalName: hospital, rating: rating });

                        }}>{hospital}: {rating}
                    </div>)}
            </div>
        </div>
    )
}

export default CardPanel