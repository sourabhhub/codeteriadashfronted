import React from 'react'
const Cheatsheet = () => {
  const data = [
    {
      id: 1,
      info: "Reactjs"
    },

    {
      id:2,
      info:"Nodejs"
    },

    {
      id:3,
      info:"Javascript"
    },

    {
      id:4,
      info:"C"
    },

    {
      id:5,
      info:"C++"
    },


  ]
  return (
    <>
      <div className='  w-full bg-gradient-to-r from-slate-500 to-green-400 h-28'>
      <ul className="flex flex-row justify-between flex-wrap mx-50 w-[750px]">
                    {
                        data.map((card) => (
                            <li className=" cursor-pointer" key={card.id}>{card.info}</li>
                        ))
                    }
                </ul>

      </div>
    </>

  )
}

export default Cheatsheet