import React, { useState } from 'react'

  interface props{
    bg: string;
  }

const Navbar = ({bg}:props) => {
    const [navClicked, setNavClicked] = useState(false)
    const handleClick = () => {
      setNavClicked(!navClicked)
    }
    
  return (
        <>
          <nav className={`h-[84px] top-0 z-10 transition-all duration-300 font-[poppins] text-[#66fcf1] fixed justify-center w-full ${bg}`}>
          {/* <div className='logo'>
            <p className='font-[1000]'>Adebowale</p>
          </div>
           */}
          <ul className={`flex flex-col lg:flex-row md:flex-row gap-[50px] justify-center p-[30px] font-[300] transition-all duration-300 ease-in-out bg-black lg:bg-transparent ${navClicked ? 'translate-y-0' : 'translate-y-[-500px] lg:translate-y-0 md:translate-y-0'}`}>
              <li>HOME</li>
              <li>PORTFOLIO</li>
              <li>ABOUT</li>
              <li>CONTACT</li>
            </ul>
            <img width="30" height="30" onClick={handleClick} src="https://img.icons8.com/fluency/50/menu--v1.png" alt="menu--v1" className='lg:hidden md:hidden absolute right-[10px] top-[30px]'/>

          </nav>
        </>
  )
}

export default Navbar