

import React, { useContext, useEffect, useState } from 'react'
import AdmiSubHeader from '../../components/subheader/admi-subheader.components'
import { AdmiMenu } from './admi-menu.components'
import { Link } from 'react-router-dom'
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Textarea } from '@material-tailwind/react'
import { FaCalendarDays, FaReply } from 'react-icons/fa6'
import { TestComponent } from './test.components'

import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { OrderContext } from '../../context/order.context'
import { FaCheckCircle } from 'react-icons/fa'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { BsShieldExclamation } from 'react-icons/bs'
import { TbTrash } from 'react-icons/tb'
 
const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Monitored",
    value: "monitored",
  },
  {
    label: "Unmonitored",
    value: "unmonitored",
  },
];
 
const TABLE_HEAD = ["Member", "Status", "Event Details", "Cake Details"];
 
const TABLE_ROWS = [
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "John Michael",
    email: "john@creative-tim.com",
    job: "Manager",
    org: "Organization",
    online: true,
    date: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    job: "Programator",
    org: "Developer",
    online: false,
    date: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    name: "Laurent Perrier",
    email: "laurent@creative-tim.com",
    job: "Executive",
    org: "Projects",
    online: false,
    date: "19/09/17",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    name: "Michael Levi",
    email: "michael@creative-tim.com",
    job: "Programator",
    org: "Developer",
    online: true,
    date: "24/12/08",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    name: "Richard Gran",
    email: "richard@creative-tim.com",
    job: "Manager",
    org: "Executive",
    online: false,
    date: "04/10/21",
  },
];

const OrdersView = () => {

    const { orders, updateOrder } = useContext(OrderContext)
    const [ allOrders, setAllOrders ] = useState(orders)


    const searchOrder = (e) => {

      const searchKey = e.target.value.toLowerCase();
      const newSearch = orders.filter(e => e.fullname.toLowerCase().includes(searchKey) || e.phone.includes(searchKey))
      setAllOrders(newSearch)
      // console.log(newSearch)
    }

    const closeOrder = (ord) => {
      ord['status'] = 'yes';
      const msg = ord.fullname+"'s order has been closed";
      if (window.confirm("Do you want to close "+ord.fullname+"'s order?")) {
        updateOrder(ord, msg)
      }
      // console.log('Order closed..! ', ord)
    }

    useEffect(() => {
        setAllOrders(orders)
    }, [orders])


  return (
    <>
    <AdmiSubHeader h2='Orders' h6='Manage orders here' />
    <AdmiMenu />
    {/* <TestComponent /> */}

    <div className="content-wrapper2 inquiry-list">
      {/* <ul role="list" className="divide-y divide-gray-100">
        {allOrders.map((item) => (
          <li key={item.email} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img className="h-8 w-8 flex-none rounded-full bg-gray-50" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s" alt="" /> 
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{item.name}</p>
                <p className="mt-0 text-xs leading-5 text-gray-500">{item.message}</p>
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

              </div>
            </div>
            <div className="flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{item.name}</p>
              <p className="mt-0 text-xs leading-5 text-gray-500">{item.message}</p>
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
              <p className="mt-0 text-xs leading-5 text-gray-500">{item.email}</p>
            </div>
          </li>
        ))}
      </ul> */}
      {/* <table>
      </table> */}

      
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          {/* <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Members list
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                See information about all members
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button variant="outlined" size="sm">
                view all
              </Button>
              <Button className="flex items-center gap-3" size="sm">
                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add member
              </Button>
            </div>
          </div> */}

          <div className="flex mt-2 flex-col items-center justify-between gap-4 md:flex-row">
            {/* <Tabs value="all" className="w-full md:w-max">
              <TabsHeader>
                <Tab key="0" value="0">
                  &nbsp;&nbsp;All&nbsp;&nbsp;
                </Tab>
                <Tab key="1" value="1">
                  &nbsp;&nbsp;Open&nbsp;&nbsp;
                </Tab>
                <Tab key="2" value="2">
                  &nbsp;&nbsp;Closed&nbsp;&nbsp;
                </Tab>
              </TabsHeader>
            </Tabs> */}

            <div className="w-full md:w-72">
              <Input
                label="Search"
                onChange={searchOrder}
                placeholder='Search by Name / Phone'
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
          </div>
        </CardHeader>

        <CardBody className="overflow-scroll px-0">
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head, index) => (
                  <th
                    key={head}
                    className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                    >
                      {head}{" "}
                      {index !== TABLE_HEAD.length - 1 && (
                        <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                      )}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            
            <tbody>
              {allOrders.map(
                (ord, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";
  
                  return (
                    <tr key={ord.id}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <FaCalendarDays className='w-8 h-8 bg-orange-300/20 rounded-md p-2' />
                          {/* <Avatar src="https://www.nicepng.com/png/detail/866-8666442_schedule-icon.png" alt="" size="sm" /> */}
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {ord.fullname}
                            </Typography>
                            <Typography variant="small" color="blue-gray" className="font-normal opacity-70">{ord.email}</Typography>
                            <Typography variant="small" color="blue" className="font-normal opacity-70 tracking-wide">{ord.phone}</Typography>
                          </div>
                        </div>
                      </td>

                      <td className={classes}>
                        <div className="w-max">
                        {ord.status !== "no" ?
                        <>
                          <p className='reply-btn2 text-green-600'><IoMdCheckmarkCircleOutline className='float-left mt-0.5' />&nbsp;&nbsp;Closed</p>
                        </>
                          :
                        <>
                          <p className='reply-btn'><BsShieldExclamation className='float-left mt-0.5' />&nbsp;&nbsp;Waiting</p>
                          <p onClick={() => closeOrder(ord)} className='mt-3 px-1.5 pb-1 text-xs text-red-600 border-b border-b-red-300 hover:border-b-white hover:opacity-70'>Close Order&nbsp;<TbTrash size={16} className='float-right' /></p>
                        </>
                        }
                        </div>
                      </td>

                      <td className={classes}>
                        <div className="flex flex-col">
                          <Typography variant="small" color="blue-gray" className="font-normal">{ord.evt_date}</Typography>
                          { ord.delivery === "yes" ?
                          <>
                            <Typography variant="small" color="blue-gray" className="font-normal opacity-70">Delivery @ {ord.evt_time}</Typography>
                            <Typography variant="small" color='blue' className="font-normal text-xs uppercase opacity-70 border-b pb-1">{ord.delivery_add}</Typography>
                            {ord.special_inst ?
                              <>
                                <Typography variant="small" color="blue-gray" className="text-xs opacity-60 pt-2">Del. Instructions</Typography>
                                <Typography variant="small" color="blue-gray" className="text-xs">{ord.special_inst}</Typography>
                              </>
                            :null}
                          </>
                          :
                            <Typography variant="small" color="blue-gray" className="font-normal opacity-70">Pick up @ {ord.evt_time}</Typography>
                          }
                        </div>
                      </td>

                      <td className={classes}>
                        {/* <Typography variant="small" className="font-normal text-xs uppercase opacity-70 float-right text-blue-700 border-b border-b-blue-600 hover:opacity-50">View Details</Typography> */}
                        <div className='pb-2 border-b border-b-orange-300'>
                          { ord.cake_list.map((el, i) => 
                          <div key={i} className='text-xs'>
                            <p>&nbsp;</p>
                            <p className='font-medium uppercase'>{el.cake_type+' ('+el.qty+')'}</p>
                            <p className='opacity-70 border-b pb-1 mb-1'>Flavor: {el.flavor}</p>
                            <p className=''>{el.dietary_rests}</p>
                            <p className=''>{el.specific_dets}</p>
                          </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                },
              )}
            </tbody>
          </table>
        </CardBody>
        
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page 1 of 10
          </Typography>
          <div className="flex gap-2">
            <Button variant="outlined" size="sm">
              Previous
            </Button>
            <Button variant="outlined" size="sm">
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>

    </div>

    </>
  )
}

export default OrdersView
