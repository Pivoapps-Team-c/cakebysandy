

import React, { useContext, useEffect, useState } from 'react'
import Navbar1 from '../../components/mynavbar/navbar1.components'
import HomeHeader from './homeheader.components'
import CategoryItem from './category-item.components'
import PreorderForm from '../../components/forms/preorder.components'
import cupcake from '../../assets/images/cupcakes.png'
import wedcake from '../../assets/images/wedding-cakes.png'
import ContactForm from '../../components/contact/contactform.components'
import { OrderContext } from '../../context/order.context'

const HomePage = () => {

  const callouts = [
    {
      name: 'Category One',
      description: 'Short description from category one',
      imageSrc: 'https://i.pinimg.com/564x/16/fb/99/16fb9968fcc654addbc7a21ade300d3a.jpg',
      imageAlt: 'Short description from category one.',
      href: '#',
    },
    {
      name: 'Category Two',
      description: 'Short description from category two',
    //   imageSrc: 'https://i.pinimg.com/564x/39/da/62/39da62db39bd043917500362e60c6255.jpg',
      imageSrc: 'https://i.pinimg.com/564x/6b/3a/6e/6b3a6e4dc26aca5a3df6247b07d78d24.jpg',
      imageAlt: 'Short description from category two.',
      href: '#',
    },
    {
      name: 'Category Three',
      description: 'Short description from category three',
      imageSrc: 'https://i.pinimg.com/564x/5e/21/94/5e2194154e9a83fff4cca190085f8984.jpg',
      imageAlt: 'Short description from category three.',
      href: '#',
    },
  ]

  const defaultCompanyValues = {
    companyDisplayName: '',
    companyName: '',
    slogan: '',
    address1: '',
    address2: '',
    phone: '',
    email: '',
    country: '',
    ig: '',
    fb: '',
    tw: '',
    tq: '',
    yt: '',
    logo: 'No file uploaded',
    createdAt: new Date()
  }


  const defaultValues = {
    title: 'Deliciously Baked, Lovingly Made',
    subtitle1: "Handcrafted cakes and pastries that bring joy to every occasion, ",
    subtitle2: "made with the finest ingredients and a touch of love.",
    cat1: 'Category One',
    cat1_desc: 'Short description from category one',
    cat2: 'Category Two',
    cat2_desc: 'Short description from category two',
    cat3: 'Category Three',
    cat3_desc: 'Short description from category three',
    about_img_url: 'https://img.freepik.com/premium-photo/portrait-smiling-female-baker-leaning-stack-bread_604472-24133.jpg',
    about_name: 'Patric Ola Yawson',
    about_title: 'Our Chief',
    about_text: "Discover the range of delights that Sandy's Cake offers. From decadent cakes to mouthwatering pastries, our creations are crafted with passion and precision. Whether for a special celebration or a sweet craving, Discover the range of delights that Sandy's Cake offers. From decadent cakes to mouthwatering pastries, our creations are crafted with passion and precision. Whether for a special celebration or a sweet craving, we have the perfect treat to make your day extraordinary. Explore our menu, book your custom order, and enjoy the finest baked goods made with love and the best ingredients.",
    more_sandy: "Discover the range of delights that Sandy's Cake offers. From decadent cakes to mouthwatering pastries, our creations are crafted with passion and precision. Whether for a special celebration or a sweet craving, we have the perfect treat to make your day extraordinary. Explore our menu, book your custom order, and enjoy the finest baked goods made with love and the best ingredients.",
    company: [],
    del: 'no',
    created_at: new Date(),
    updated_at: null,
  }
  
  const { curPage } = useContext(OrderContext)
  const [ newCurPage, setNewCurPagae ] = useState(defaultValues)
  const { title, subtitle1, subtitle2, cat1, cat1_desc, cat2, cat2_desc, cat3, cat3_desc, about_img_url, about_name, about_title, about_text, more_sandy, created_at, del } = newCurPage
//   console.log('cur: ', newCurPage)

  useEffect(() => {
    if (curPage) {
        setNewCurPagae(curPage)
    }
  }, [curPage])

  return (
    <>
    {/* { newCurPage ? */}
    <>
    <div className="header">
      <HomeHeader />
    </div>

    <PreorderForm />

    <div className="bg-gray-100 cake-categories">
        {/* <h2>Our Categories</h2> */}

        <div className="">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-gray-100">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h2 className="pannel-header">What we do</h2>
                    <h4 className='text-center uppercase text-xs tracking-widest text-brown-400'>Browse through our list</h4>

                    <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        {/* {callouts.map((callout) => (
                        <div key={callout.name} className="group relative">
                            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                <img
                                    src={callout.imageSrc}
                                    alt={callout.imageAlt}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <h3 className="mt-6 text-sm text-gray-500">
                            <a href={callout.href}>
                                <span className="absolute inset-0" />
                                {callout.name}
                            </a>
                            </h3>
                            <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                        </div>
                        ))} */}
                        <div className="group relative">
                            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                <img
                                    src="https://i.pinimg.com/564x/16/fb/99/16fb9968fcc654addbc7a21ade300d3a.jpg"
                                    alt="https://i.pinimg.com/564x/16/fb/99/16fb9968fcc654addbc7a21ade300d3a.jpg"
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <h3 className="mt-6 text-sm text-gray-500">
                            <a href="">
                                <span className="absolute inset-0" />
                                {cat1}
                            </a>
                            </h3>
                            <p className="text-base font-semibold text-gray-900">{cat1_desc}</p>
                        </div>

                        <div className="group relative">
                            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                <img
                                    src="https://i.pinimg.com/564x/6b/3a/6e/6b3a6e4dc26aca5a3df6247b07d78d24.jpg"
                                    alt="https://i.pinimg.com/564x/6b/3a/6e/6b3a6e4dc26aca5a3df6247b07d78d24.jpg"
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <h3 className="mt-6 text-sm text-gray-500">
                            <a href="">
                                <span className="absolute inset-0" />
                                {cat2}
                            </a>
                            </h3>
                            <p className="text-base font-semibold text-gray-900">{cat2_desc}</p>
                        </div>

                        <div className="group relative">
                            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                <img
                                    src="https://i.pinimg.com/564x/5e/21/94/5e2194154e9a83fff4cca190085f8984.jpg"
                                    alt="https://i.pinimg.com/564x/5e/21/94/5e2194154e9a83fff4cca190085f8984.jpg"
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <h3 className="mt-6 text-sm text-gray-500">
                            <a href="">
                                <span className="absolute inset-0" />
                                {cat3}
                            </a>
                            </h3>
                            <p className="text-base font-semibold text-gray-900">{cat3_desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="cake-featured">
        <div className="cake-featured-inner">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h2 className="pannel-header">Featured</h2>
                    <h4 className='text-center uppercase text-xs tracking-widest text-brown-400'>Check out our specials</h4>
                    
                    <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        <div className="group relative col-span-2 shadow-lg">
                            <div className="flex relative h-80 w-full gap-x-6 overflow-x-auto rounded-lg">
                                <img className="h-full object-cover object-center" src="https://c4.wallpaperflare.com/wallpaper/643/821/128/spikelets-bread-cakes-roll-wallpaper-preview.jpg" />
                                <img className="h-full object-cover object-center" src="https://www.southernliving.com/thmb/pvi50-Vck49MR4vJ4Eh8-kOF27E=/1200x0/filters:no_upscale():max_bytes(150000):strip_icc()/gettyimages-639897672-2000-934de272fa7c42f5ba0516978022e05c.jpg" />
                                <img className="h-full object-cover object-center" src="https://dynl.mktgcdn.com/p/rtP4FfaNFgvmmrVXUHiqpuu5sG2CbPvIfxA4W5kzWKY/619x275.jpg" />
                            </div>
                        </div>

                        <div className="group relative feature-more bg-orange-100/60">
                            <h3>More from Sandy's</h3>
                            <p>{more_sandy}</p>
                        </div>
                    </div>

                    <div className="featured-bottom">
                        <div className="feat-b-item">
                            <img src={cupcake} alt="" />
                            <h4>Cupcakes</h4>
                            <p>In S/M/L sizes & quntities</p>
                        </div>
                        <div className="feat-b-item">
                            <img src={wedcake} alt="" />
                            <h4>Wedding Cakes</h4>
                            <p>In all sizes & quntities</p>
                        </div>
                        <div className="feat-b-item">
                            <img src="https://firebasestorage.googleapis.com/v0/b/cakebysandy-a4e24.appspot.com/o/files%2Fbday.png?alt=media&token=bde32ec8-f3e5-44d0-9995-7839ea0e1140" alt="" />
                            <h4>Birthday Cakes</h4>
                            <p>In your prefered size</p>
                        </div>
                        <div className="feat-b-item">
                            <img src={wedcake} alt="" />
                            <h4>Customized Cakes</h4>
                            <p>In all sizes & quntities</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <ContactForm company={newCurPage.company} />
    </>
    {/* :null} */}
    </>
  )
}

export default HomePage