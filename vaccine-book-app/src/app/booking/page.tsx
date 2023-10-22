import LocationDateReserve from "@/components/LocationDateReserve";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";

async function Booking() {

  const session = await getServerSession(authOptions)
  if(!session || !session.user.token) return null

  const profile = await getUserProfile(session.user.token)
  var createdAt = new Date(profile.data.createdAt)

  return (
    <main className="w-[100%] flex flex-col items-center space-y-4">
      <div className="text-2xl text-gray-600 mt-5 mb-5 font-bold">{profile.data.name}</div>
      <table className="table-auto border-separate border-spacing-2 bg-slate-100 rounded-md text-gray-600">
        <tbody>
          <tr><td>Email</td><td>{profile.data.email}</td></tr>
          <tr><td>Tel</td><td>{profile.data.tel}</td></tr>
          <tr><td>Member Since</td><td>{createdAt.toString()}</td></tr>
        </tbody>
      </table>
      <div className="text-xl text-gray-600 mt-5 mb-5 font-bold">
        New Reservation
      </div>
      <div className="w-fit space-y-2">
        <div className="w-[100%] flex flex-row">
          <div className="text-md text-left text-gray-600">Name</div>
          <input
            type="text"
            id="name"
            placeholder="your name"
            className="ml-5 mr-5 rounded ring-1 ring-inset ring-gray-600
              text-md leading-6 indent-2 placeholder:text-gray-400
              focus:outline-none focus:ring-sky-800 focus:placeholder:text-sky-800"
          />
          <div className="text-md text-left text-gray-600">Lastname</div>
          <input
            type="text"
            id="lastName"
            placeholder="your last name"
            className="ml-5 mr-5 rounded ring-1 ring-inset ring-gray-600
              text-md leading-6 indent-2 placeholder:text-gray-400
              focus:outline-none focus:ring-sky-800 focus:placeholder:text-sky-800"
          />
        </div>
        <div className="w-[100%] flex flex-row">
          <div className="text-md text-left text-gray-600">National ID No.</div>
          <input
            type="text"
            id="NationalIDNo"
            placeholder="National ID No"
            className="ml-5 mr-5 rounded ring-1 ring-inset ring-gray-600
              text-md leading-6 indent-2 placeholder:text-gray-400
              focus:outline-none focus:ring-sky-800 focus:placeholder:text-sky-800"
          />
        </div>
        <div className="text-md text-left text-gray-600">
          Choose Date and Location
        </div>
        <LocationDateReserve />
      </div>
      <button
        className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
        shadow-sm text-white"
      >
        submit
      </button>
    </main>
  );
}

export default Booking;
