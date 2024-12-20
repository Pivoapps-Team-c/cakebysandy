

import React from 'react'

const SubHeader = ({ h2, h6, disp }) => {
  return (
    <>
    <div className={disp == 'hidden' ? "hidden" : "header-container"}>
      <div className="sub-header-shade">

        <div className="content-wrapper">
          <div className='sub-header-text'>
              <h2>{h2}</h2>
              <h6 className=''>{h6}</h6>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default SubHeader