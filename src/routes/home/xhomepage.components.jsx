


import { Button, Carousel, Typography } from '@material-tailwind/react'
import React from 'react'
import './homepage.styles.scss'
import SignUpPage from '../signup/signuppage.components'
import { BsCheckCircleFill } from 'react-icons/bs'
import { TbPlayFootball, TbSoccerField } from 'react-icons/tb'
import { GiSoccerBall } from 'react-icons/gi'
import { LuCalendarClock } from 'react-icons/lu'
import { IoSend } from "react-icons/io5";
import { MyFooter } from '../../components/myfooter/footer.components'
import ContactForm from '../../components/contact/contactform.components'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
    <div className="header-container">
      <div className="header-shade">

        <div className="content-wrapper">
          <div className='header-text'>
              <h2>Kickstart Your</h2>
              <h2>Child's Soccer Journey!</h2>
              <h6 className='mt-4 mb-12'>Join our fun and engaging soccer coaching programs for kids aged 5-15</h6>
              {/* <h6 className='mb-12'>programs for kids aged 5-15</h6> */}
              <Link to="/signup"><Button className="gradient1" size='lg'>Sign Up Now</Button></Link>
          </div>

        </div>
      </div>
    </div>

    <div className="content-1 bg-gray-200">
      <div className="promo">
        <div className="promo-div1">
          <p>Get</p>
          <p>Up To</p>
        </div>

        <div className="promo-div2">
          <h2>10%</h2>
          <h4>Off</h4>
          <p>Special Offer</p>
        </div>
      </div>

      <div className="showcase">
        <div className='video-container relative'>
          <Button className='absolute top-0 z-30 ml-7 mt-6 rounded-sm text-xs py-2'>From the team</Button>
          <video className="h-full w-full rounded-t-xl" controls autoPlay muted>
            <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="video-title">
          <p>August 25th, 2024</p>
          <h2>Change header here for video title</h2>
        </div>
      </div>

    </div>



    <div className="content-wrapper content-2">
      <h1 className='content-title'>Our programs</h1>

      <div className='programs-container'>
        <div className="program">
          <TbPlayFootball size={40} className='program-icon' />
          <h2>Beginner Program (Ages 5-7)</h2>
          <p>An introduction to soccer with fun games and basic skills.</p>
        </div>

        <div className="program">
          <GiSoccerBall size={40} className='program-icon animate-bounce' />
          <h2>Intermediate Program (Ages 8-11)</h2>
          <p>Building on basic skills with more structured training and small-sided games.</p>
        </div>

        <div className="program">
          <TbSoccerField size={40} className='program-icon' />
          <h2>Advanced Program (Ages 12-15)</h2>
          <p>Advanced training focusing on tactical understanding and competitive play.</p>
        </div>

        <div className="program">
          <LuCalendarClock size={40} className='program-icon animate-pulse' />
          <h2>Seasonal Program (Ages 12-15)</h2>
          <p>Join our summer and winter sessions for intensive training and lots of fun.</p>
        </div>
      </div>
    </div>



    <div className="content-wrapper content-3 my-6">
      <div className="c3-dark">
        <Button color='purple' className='rounded-sm py-2 mb-5'>Registering</Button>
        <h2>Joining the <span>Bright</span></h2>
        <h2 className=''><span>Stars</span> made more easier</h2>
        <h4>Since June 27th, 2024</h4>
        <p className='pt-5'>Fill in parent and kids's details, selected program and any medical conditions or special needs.</p>
        <p>Make payment for selected program</p>
        <p>Accept Terms & Conditions.</p>
        <Button className='rounded-sm border-2 border-gray-300 mt-10' variant='outlined' color='white'>Find out &nbsp; <IoSend size={14} className='animate-pulse float-right pt-0.5 text-purple-500' /></Button>
        <GiSoccerBall className='text-white football-spinner' />
      </div>

      <div className="c3-light">

        <div className='news-container relative'>
          <Button type='button' color='red' className='absolute top-0 z-30 ml-7 mt-6 rounded-sm text-xs py-2'>Latest News</Button>
          <video className="h-full w-full rounded-t-xl" controls autoPlay muted>
            <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="news-title">
          <div className="p-6">
            <h2>Change header here for video title</h2>
            <p>August 25th, 2024 - John Doe</p>
          </div>

          <div className="border-t pt-3 pb-6 px-6">
            <Button variant='outlined' className='rounded-sm text-xs py-2 float-right'>View Post</Button>
            <p>&nbsp;</p><p>&nbsp;</p>
            {/* <h4 className='author'>John Doe</h4> */}
          </div>
        </div>

      </div>

      <ContactForm />
    </div>


    {/* <div className="footer-joined">
      
      <div className=" bg-gray-200/95">
        <div className="site-sponsors content-wrapper px-8 py-6 m-auto">
          <img src="https://i.pinimg.com/474x/89/73/d4/8973d4473f428cb78cca39f82c15af3e.jpg" alt="" />
          <img src="https://i.pinimg.com/474x/d4/9f/a3/d49fa3523c84bef766b4b2bde8296d23.jpg" alt="" />
          <img src="https://i.pinimg.com/474x/5c/43/c9/5c43c98854d094f89caa5bb5dafdbb59.jpg" alt="" />
          <img src="https://i.pinimg.com/474x/7d/dc/54/7ddc545046b212d9ecc8eef83569222b.jpg" alt="" />
          <img src="https://i.pinimg.com/474x/38/a9/23/38a92369d26415bdf513caa2606a6b85.jpg" alt="" />
          <img src="https://i.pinimg.com/474x/3e/53/94/3e539404efa6451dda9661bc2eb0a9b0.jpg" alt="" />
        </div>
      </div>

      <MyFooter />

    </div> */}

    {/* <SignUpPage /> */}
    </>
  )
}

export default HomePage