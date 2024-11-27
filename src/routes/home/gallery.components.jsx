

import React, { useEffect, useState } from 'react'
import ContactForm from '../../components/contact/contactform.components'
import SubHeader from '../../components/subheader/subheader.components'
import { useOrder } from '../../hooks/useAuth'
import GaleryItems from '../gallery/gallery-items.components'
import { DialogDefault, TestComps } from '../gallery/test-comps.components'
import AdmiSubHeader from '../../components/subheader/admi-subheader.components'
import { FaFilter } from 'react-icons/fa6'

const GalleryPage = () => {
    const { curPage, gallery } = useOrder();
    const [ page, setPage ] = useState(curPage)
    // const { currentPage } = useAuth();

    useEffect(() => {
        setPage(curPage)
        // console.log("CurPage 12", curPage)
    }, [curPage])
  return (
    <>

    <AdmiSubHeader h2="Our gallery" h6="View our amazing designs" />

    {page ? 
    <>
        <div className="bg-white cake-categories mb-20">
            <div className="">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-white">
                    <GaleryItems />
                </div>
            </div>
        </div>
        <ContactForm company={page.company} />
    </>
    :null} 
    </>
  )
}

export default GalleryPage