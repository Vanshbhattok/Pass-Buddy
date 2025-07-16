import React from 'react'

const Navbar = () => {
  return (
    <nav className='text-white'>
      <div className="mycontainer h-15 px-5 flex justify-between items-center px-4 py-6 h-15">
        <div className="logo font-bold text-white text-2xl">
          <span className='flex-col text-center'>Pass</span>
          <span className='flex-col text-purple-500'>Buddy
            <lord-icon
    src="https://cdn.lordicon.com/kpfqbkcv.json"
    trigger="hover"
    colors="primary:#ffffff,secondary:#8930e8"
    >
</lord-icon>
          </span>
          </div>
      <a href='https://github.com/Vanshbhattok'><button className='text-white my-5 rounded-full flex gap-1 cursor-pointer justify-center items-center'>
        <img className="invert w-10 p-1" src="/icons/github.svg" alt="" />
        <span className='font-bold'>GitHub</span>
      </button></a>
      
      </div>
    </nav>
  )
}

export default Navbar
