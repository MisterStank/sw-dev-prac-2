'use client'
import VideoPlayer from "./VideoPlayer"
import { useState } from 'react'
import useWindowListener  from '@/hooks/useWindowListener'

function PromoteCard() {

    const [playing, setPlaying] = useState(true)
    
    useWindowListener('contextmenu', (e)=>{e.preventDefault()})

  return (
    <div className="w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg 
    bg-gray-200 flex flex-row">
        <VideoPlayer isPlaying={playing} vdoSrc="/getvaccine.mp4"></VideoPlayer>
        <div className="m-5 font-sans font-medium text-xl">
            Get your vaccine today
            <button className="my-5 block rounded-full bg-sky-600 hover:bg-indigo-600 
            px-5 py-2 text-white font-normal shadow-sm"
            onClick={()=> setPlaying(!playing)}>
                {playing? 'Pause':'Play'}
            </button>
        </div>
    </div>
  )
}

export default PromoteCard