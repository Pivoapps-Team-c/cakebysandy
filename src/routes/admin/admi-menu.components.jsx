

import React from 'react'
import './admi.styles.scss'
import { Link } from 'react-router-dom'

export const AdmiMenu = () => {
  return (
    <>
    <div className="admi-menu-container">
        <div className="menu-list">
            <Link to="/inquiry"><p>Inquiry</p></Link>
            <Link to="/orders"><p>Orders</p></Link>
            <Link to="/docs"><p className='border-none'>Docs</p></Link>
        </div>
    </div>
    </>
  )
}
