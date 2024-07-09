

import React from 'react'
import './subheader.styles.scss'

const AdmiSubHeader = ({ h2, h6 }) => {
  return (
    <>
    <div className="admi-header-container">
      <div className="admi-sub-header-shade">

        <div className="content-wrapper">
          <div className='admi-sub-header-text'>
              <h2>{h2}</h2>
              <h6 className=''>{h6}</h6>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default AdmiSubHeader