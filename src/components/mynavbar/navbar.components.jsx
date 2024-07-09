import React from 'react'
import '../mynavbar/navbar.styles.scss'
import { Typography } from '@material-tailwind/react'

const MyNavbar = () => {
  return (
    <>
    {/* <p>&nbsp;</p> */}
    <div className="navbar">
        <div className="content-wrapper">
            <div className="menu-items">
                
                <ul className="mt-2 flex gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
                {/* <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center"> */}
                    <Typography as="li" variant="small" className="menu-item p-1 font-normal">
                        <a href="#" className="flex items-center">Menu</a>
                    </Typography>

                    <div>
                        <a href="/"><Typography className='text-logo'><span className='font-thin text-gray-300'>Bright</span>Stars</Typography></a>
                    </div>
                    
                    <Typography as="li" variant="small" className="menu-item p-1 font-normal">
                        <a href="#contact" className="flex items-center">Contact</a>
                    </Typography>
                    <Typography as="li" variant="small" className="hidden sm:block menu-item p-1 font-normal">
                        <a href="/signup" className="flex items-center">Sign Up</a>
                    </Typography>
                </ul>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default MyNavbar