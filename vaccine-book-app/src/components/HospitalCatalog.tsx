import Link from "next/link"
import Card from "./Card"
import AddHospitalForm from "./AddHospitalForm"
import getUserProfile from "@/libs/getUserProfile"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export default async function HospitalCatalog ({hospitalJson}:{hospitalJson:Object}) {
  const hospitalJsonReady = await hospitalJson
  const session = await getServerSession(authOptions)
  if(!session || !session.user.token) return null
  const profile = await getUserProfile(session.user.token)
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

        {profile.data.role=="admin" && <AddHospitalForm />}
    </>
  )
}
