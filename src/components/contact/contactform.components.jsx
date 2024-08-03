

import { Button, Card, Input, Typography } from '@material-tailwind/react'
import React, { useContext, useState } from 'react'
import './contactform.styles.scss'
import { BiSupport } from 'react-icons/bi'
import { OrderContext } from '../../context/order.context'
import { successToast } from '../../utils/firebase/firebase.utils'
import { BsFillQuestionCircleFill } from 'react-icons/bs'
import { IoWarning } from 'react-icons/io5'
import { FaRegCircleCheck } from 'react-icons/fa6'
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import { PiMapPinArea, PiMapPinAreaBold } from 'react-icons/pi'


const ContactForm = ({ company }) => {


    const { companyDisplayName, companyName, slogan, address1, address2, phone, email, country, logo } = company;
    const { addInquiry } = useContext(OrderContext);

    const defaultValues = {
        name: '',
        email: '',
        message: '',
        status: 'no',
        del: 'no',
        created_at: new Date(),
        updated_at: null,
    }
    
    const [ inquire, setInquire ] = useState(false);
    const [ inquiryText, setInquirText ] = useState('');
    const [ formFields, setFormFields ] = useState(defaultValues);

    const inquireClick = () => {
        setInquire(!inquire)
        setInquirText('')
    }

    const changeFieldText = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value})
        // console.log(value)
    }

    const submitInquiry = async (event) => {
        event.preventDefault()

        // return successToast('Inquiry Submited. Our team will reach out to you in 24hrs');
        
        // if (termsChecked == false) {
        //     return console.log('Oops..! Read and accept Terms & Conditions to proceed')
        // }

        // Save to database
        await addInquiry(formFields).then(
            setInquirText('y'),
            setInquire(!inquire),
            setFormFields([])
        );
        
    }



  return (
    <>
    <div id="contact" className="relative isolate overflow-hidden bg-[#1b0e0b] py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                <div className="max-w-xl lg:max-w-lg">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Wanna talk to Sandy?</h2>
                    <p className="mt-1 text-xs uppercase tracking-wider leading-8 text-brown-200">Click Button to Reach Out to Us</p>
                    <div className="mt-6 max-w-md gap-x-4">
                        {/* <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                            placeholder="Enter your email"
                        />
                        <button
                            type="submit"
                            className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        >
                            Subscribe
                        </button> */}

                            { inquire == false ?
                            <Button color='white' size='lg' className="w-1/2 my-1 text-white text-xs font-semibold tracking-wider rounded-full bg-orange-400/70 border-orange-400/20" onClick={inquireClick}>Contact Us</Button>
                            :null}
                        <Card id='contact' className='contact-form'>
                            

                            { inquiryText === 'y' ?
                                <Button type="button" variant='outlined' color='green' size='lg' className="flex text-center text-xs tracking-wider font-light mx-4 my-6 rounded-full"><FaRegCircleCheck size={16} />&nbsp;Inquiry Submitted</Button>
                            : inquiryText === 'x' ?
                                <Button type="button" variant='outlined' color='red' size='lg' className="flex text-center text-xs tracking-wider font-light mx-4 my-6 rounded-full"><IoWarning size={16} />&nbsp;Oops..! An Error Occured</Button>
                            :null }


                            { inquire == true ?
                            <form id='contact-form' onSubmit={submitInquiry}>
                                <div className="input-div">
                                    <input className='darkInput' name="name" value={formFields.name} onChange={changeFieldText} type="text" size="lg" label="Your Name" placeholder="Name *" required/>
                                </div>

                                <div className="input-div">
                                    <input className='darkInput' name="email" value={formFields.email} onChange={changeFieldText} type="email" size="lg" label="Email" placeholder="Email *" required/>
                                </div>

                                <div className="input-div">
                                    <textarea className='darkInput' name="message" value={formFields.message} rows={4} onChange={changeFieldText} type="email" size="lg" label="Message" placeholder="Message *" required/>
                                </div>

                                <Button type="submit" variant='outlined' color='white' size='lg' className="text-xs font-normal tracking-wider mt-6 rounded-full float-right broder bg-orange-400/70 border-orange-400/20">Submit Inquiry</Button>
                            </form>
                            :null}
                        </Card>

                    </div>

                </div>
                
                <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                    <div className="flex flex-col items-start">
                    <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                        <CalendarDaysIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <dt className="mt-4 font-semibold text-white">Weekly Schedule</dt>
                    <dd className="mt-2 leading-7 text-brown-200">
                        Check out our special offerings and promotions each day to satisfy your sweet tooth.
                    </dd>
                    </div>
                    <div className="flex flex-col items-start">
                    <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                        <PiMapPinArea className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <dt className="mt-4 font-semibold text-white">Our Location</dt>
                    <dd className="mt-2 leading-7 text-brown-200">{address1} <br /> {address2}<br />{phone}</dd>
                    </div>
                </dl>
            </div>
        </div>

        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
            <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#786b4b] to-[#572d00] opacity-30"
            style={{
                clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            />
        </div>
    </div>

    </>
  )
}

export default ContactForm