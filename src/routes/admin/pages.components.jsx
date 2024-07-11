

import React from 'react'
import AdmiSubHeader from '../../components/subheader/admi-subheader.components'
import { AdmiMenu } from './admi-menu.components'

const PagesEdit = () => {
  return (
    <>
    <AdmiSubHeader h2='Pages' h6='Update web pages here' />
    <AdmiMenu />

    <div className="content-wrapper2 inquiry-list">
        <p className='text-red-500 text-xs text-center m-5 uppercase tracking-wider border border-red-200 rounded-md bg-red-50/50 p-5'>Oops..! Contact administrator to proceed</p>
    </div>
    </>
  )
}

export default PagesEdit