

import React, { useContext, useEffect, useState } from 'react'
import AdmiSubHeader from '../../components/subheader/admi-subheader.components'
import { AdmiMenu } from './admi-menu.components'
import { Link } from 'react-router-dom'
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Textarea } from '@material-tailwind/react'
import { FaReply } from 'react-icons/fa6'
import { TestComponent } from './test.components'
import { OrderContext } from '../../context/order.context'

const InquiryView = () => {

    const people = [
        {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.comleslie. Alexander@example.com leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
        },
        {
        name: 'Michael Foster',
        email: 'michael.foster@example.com',
        role: 'Co-Founder / CTO',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
        },
        {
        name: 'Dries Vincent',
        email: 'dries.vincent@example.com',
        role: 'Business Relations',
        imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: null,
        },
        {
        name: 'Lindsay Walton',
        email: 'lindsay.walton@example.com',
        role: 'Front-end Developer',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
        },
        {
        name: 'Courtney Henry',
        email: 'courtney.henry@example.com',
        role: 'Designer',
        imageUrl:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
        },
        {
        name: 'Tom Cook',
        email: 'tom.cook@example.com',
        role: 'Director of Product',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: null,
        },
    ]

    const [ showReply, setShowReply ] = useState(false)
    const [open, setOpen] = React.useState(false);

    // const [open, setOpen] = useState(false);
    
    const handleOpen = () => setOpen(!open); 

    const { inquiries } = useContext(OrderContext)
    const [ allInquiries, setAllInquiries ] = useState(inquiries)

    useEffect(() => {
        setAllInquiries(inquiries)
    }, [inquiries])


  return (
    <>
    <AdmiSubHeader h2='Inquiry' h6='Manage inquiries here' />
    <AdmiMenu />
    {/* <TestComponent /> */}

    <div className="content-wrapper2 inquiry-list">
      <ul role="list" className="divide-y divide-gray-100">
        {allInquiries.map((item) => (
          <li key={item.email} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img className="h-8 w-8 flex-none rounded-full bg-gray-50" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s" alt="" /> 
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{item.name}</p>
                <p className="mt-0 text-xs leading-5 text-gray-500">{item.message}</p>
                {/* <p className="mt-0 truncate text-xs leading-5 text-gray-500">{item.email}</p> */}
                {item.status == "no" ?
                    <p className='reply-btn' onClick={() => setShowReply(!showReply)}><FaReply className='float-left mt-0.5' />&nbsp;&nbsp;Reply</p>
                    :null
                }
                { showReply == true ? 
                <form action="">
                    <div className="w-full mt-2">
                        <Textarea label="Reply Message" name="reply_msg" />
                    </div>
                </form>
                :null
                }
                
                {/* <Button onClick={handleOpen} variant="gradient">
                    Open Dialog
                </Button>
                <Dialog open={open} handler={handleOpen}>
                    <DialogHeader>Its a simple dialog.</DialogHeader>
                    <DialogBody>
                        The key to more success is to have a lot of pillows. Put it this way,
                        it took me twenty five years to get these plants, twenty five years of
                        blood sweat and tears, and I&apos;m never giving up, I&apos;m just
                        getting started. I&apos;m up to something. Fan luv.
                    </DialogBody>
                    <DialogFooter>
                        <Button
                            variant="text"
                            color="red"
                            onClick={handleOpen}
                            className="mr-1"
                        >
                            <span>Cancel</span>
                        </Button>
                        <Button variant="gradient" color="green" onClick={handleOpen}>
                            <span>Confirm</span>
                        </Button>
                    </DialogFooter>
                </Dialog> */}

              </div>
            </div>
            <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
              {item.status == "no" ? (
                <div className="mt-0 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-orange-400/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                  </div>
                  <p className="text-xs leading-5 text-gray-500">Waiting</p>
                </div>
              ) : (
                <div className="mt-0 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-xs leading-5 text-gray-500">Replied</p>
                </div>
              )}
              {/* <Link to="/gfdsfgdfg"><p className="text-sm leading-6 text-gray-900">{item.role}</p></Link> */}
              <p className="mt-0 text-xs leading-5 text-gray-500">{item.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>

    </>
  )
}

export default InquiryView