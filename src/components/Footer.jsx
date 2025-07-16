import React from 'react'

const Footer = () => {
  return (
<footer className='t'>
 <div className='background-color: transparent flex flex-col justify-center items-center  bottom-0 w-full'>

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

 <div className='flex text-white justify-center items-center'>
      Made with <lord-icon
    src="https://cdn.lordicon.com/ajzwsrcs.json"
    trigger="hover"
    >
</lord-icon> <a href='https://github.com/Vanshbhattok'>by @Vanshbhattok</a>
    </div>
    </div>
</footer>
    
  )
}

export default Footer
