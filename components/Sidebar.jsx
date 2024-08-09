import React from 'react'
import { FcFile ,FcAssistant,FcPuzzle,FcImageFile,FcSportsMode} from "react-icons/fc";


const Sidebar = () => {
  return (
    <div className='w-64 bg-gradient-to-b from-slate-800 to-green-400  h-screen'>
      <div>
        <h1 className='text-2xl text-white font-bold items-start py-10 ml-1'>Codeteria Dashboard</h1>
      </div>
      <hr />

      <ul className='mt-3 text-white font-bold ml-5'>
        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
        <FcFile className='inline-block h-8 w-8'/>
          <a href="" className='px-3'>Cheatsheet</a>
        </li>

        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
        <FcAssistant className='inline-block h-8 w-8'/>
          <a href="" className='px-3'>Guides</a>
        </li>

        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
        <FcSportsMode className='inline-block h-8 w-8'/>
          <a href="" className='px-3'>Games</a>
        </li>

        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
        <FcImageFile className='inline-block h-8 w-8'/>
          <a href="" className='px-3'>Templetes</a>
        </li>

        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
        <FcPuzzle className='inline-block h-8 w-8'/>
          <a href="" className='px-3'>Puzzles</a>
        </li>

        
      </ul>
    </div>
  )
}

export default Sidebar