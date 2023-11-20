import Link from "next/link"
import Card from "./Card"

export default async function HospitalCatalog ({hospitalJson}:{hospitalJson:Object}) {
  const hospitalJsonReady = await hospitalJson
  return (
    <>
        <div style={{margin:"20px", display:"flex",
          flexDirection:"row", alignContent:"space-around",
          justifyContent:"space-around", flexWrap:"wrap", padding:"10px"}}>
            {
              hospitalJsonReady.data.map((hospitalItem:Object)=>(
                <Link href={`/hospital/${hospitalItem.id}`} className="w-1/5">
                  <Card hospitalName={hospitalItem.name} imgSrc={hospitalItem.picture}/>
                </Link>
              ))
            }
        </div>
    </>
  )
}
