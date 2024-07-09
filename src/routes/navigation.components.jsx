

import React from 'react'
import MyNavbar from '../components/mynavbar/navbar.components'
import { StickyNavbar } from '../components/mynavbar/nav2.components'
import { Outlet } from 'react-router-dom'
import { MyFooter } from '../components/myfooter/footer.components'
import Navbar1 from '../components/mynavbar/navbar1.components'
import HomeHeader from './home/homeheader.components'
import './other-styles.styles.scss'

const NavigationPage = () => {
  return (
    <>
    {/* <div className="tops">
      <div className="tops-shade"> */}
        <div className="navbar">
            <Navbar1 />
        </div>
        {/* <div className="header">
          <HomeHeader />
        </div> */}
      {/* </div>
    </div> */}

    <div className="main-container">
        <Outlet />
    </div>




    <div className="footer-joined">
      
      {/* <div className=" bg-gray-200/95">
        <div className="site-sponsors content-wrapper px-8 py-6 m-auto">
          <img src="https://i.pinimg.com/474x/89/73/d4/8973d4473f428cb78cca39f82c15af3e.jpg" alt="" />
          <img src="https://i.pinimg.com/474x/d4/9f/a3/d49fa3523c84bef766b4b2bde8296d23.jpg" alt="" />
          <img src="https://i.pinimg.com/474x/5c/43/c9/5c43c98854d094f89caa5bb5dafdbb59.jpg" alt="" />
          <img src="https://i.pinimg.com/474x/7d/dc/54/7ddc545046b212d9ecc8eef83569222b.jpg" alt="" />
          <img src="https://i.pinimg.com/474x/38/a9/23/38a92369d26415bdf513caa2606a6b85.jpg" alt="" />
          <img src="https://i.pinimg.com/474x/3e/53/94/3e539404efa6451dda9661bc2eb0a9b0.jpg" alt="" />
        </div>
      </div> */}

      <MyFooter />

    </div>
    </>
  )
}

export default NavigationPage