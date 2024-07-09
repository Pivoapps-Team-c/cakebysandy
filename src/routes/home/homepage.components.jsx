

import React from 'react'
import Navbar1 from '../../components/mynavbar/navbar1.components'
import HomeHeader from './homeheader.components'
import CategoryItem from './category-item.components'
import PreorderForm from '../../components/forms/preorder.components'
import cupcake from '../../assets/images/cupcakes.png'
import wedcake from '../../assets/images/wedding-cakes.png'
import ContactForm from '../../components/contact/contactform.components'

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

  return (
    <>
    <div className="header">
      <HomeHeader />
    </div>

    <PreorderForm />


    {/* <div className="bg-white cake-categories">

        <div className="">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-white">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h2 className="pannel-header">What we do</h2>
                    <h4 className='text-center uppercase text-xs tracking-widest text-brown-400'>Read a little about us</h4>

                    <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        {callouts.map((callout) => (
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
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div> */}

    <div className="bg-gray-100 cake-categories">
        {/* <h2>Our Categories</h2> */}

        <div className="">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-gray-100">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h2 className="pannel-header">What we do</h2>
                    <h4 className='text-center uppercase text-xs tracking-widest text-brown-400'>Browse through our list</h4>

                    <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        {callouts.map((callout) => (
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
                        ))}
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

                        <div className="group relative feature-more">
                            <h3>More from Sandy's</h3>
                            <p>Discover the range of delights that Sandy's Cake offers. 
                                From decadent cakes to mouthwatering pastries, our creations are 
                                crafted with passion and precision. Whether for a special celebration or a sweet craving, 
                                we have the perfect treat to make your day extraordinary. Explore our menu, book your 
                                custom order, and enjoy the finest baked goods made with love and the best ingredients.
                            </p>
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
                            <img src={cupcake} alt="" />
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

    <ContactForm />
    </>
  )
}

export default HomePage