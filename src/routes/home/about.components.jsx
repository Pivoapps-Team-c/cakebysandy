

import React from 'react'
import ContactForm from '../../components/contact/contactform.components'
import SubHeader from '../../components/subheader/subheader.components'

const AboutPage = () => {
  return (
    <>

    <SubHeader h2="About Us" h6="Find out what we do here" />

    <div className="bg-white cake-categories">
        <div className="">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-white">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h2 className="pannel-header">About Cake by Sandy</h2>
                    <h4 className='text-center uppercase text-xs tracking-widest text-brown-400'>Read a little about us</h4>

                    <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        
                        <div className="sm:text-right">
                            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                <img src="https://img.freepik.com/premium-photo/portrait-smiling-female-baker-leaning-stack-bread_604472-24133.jpg" alt="" className="h-full w-full object-cover object-center" />
                            </div>
                            <p className="mt-6 ttext-base font-semibold text-gray-900">Patric Ola Yawson</p>
                            <h3 className="ext-sm text-gray-500">
                                <a href="#">
                                    <span className="absolute inset-0" />
                                    Our Chief
                                </a>
                            </h3>
                        </div>

                        <div className="feature-more col-span-2 bg-orange-100/30">
                            {/* <h3>More...</h3> */}
                            <p>Discover the range of delights that Sandy's Cake offers. 
                                From decadent cakes to mouthwatering pastries, our creations are 
                                crafted with passion and precision. Whether for a special celebration or a sweet craving, 
                                we have the perfect treat to make your day extraordinary. Explore our menu, book your 
                                custom order, and enjoy the finest baked goods made with love and the best ingredients.
                            </p>&nbsp;
                            <p>Discover the range of delights that Sandy's Cake offers. 
                                From decadent cakes to mouthwatering pastries, our creations are 
                                crafted with passion and precision. Whether for a special celebration or a sweet craving, 
                                we have the perfect treat to make your day extraordinary. Explore our menu, book your 
                                custom order, and enjoy the finest baked goods made with love and the best ingredients.
                            </p>&nbsp;
                            <p>Discover the range of delights that Sandy's Cake offers. 
                                From decadent cakes to mouthwatering pastries, our creations are 
                                crafted with passion and precision. Whether for a special celebration or a sweet craving, 
                                we have the perfect treat to make your day extraordinary. Explore our menu, book your 
                                custom order, and enjoy the finest baked goods made with love and the best ingredients.
                            </p>
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

export default AboutPage