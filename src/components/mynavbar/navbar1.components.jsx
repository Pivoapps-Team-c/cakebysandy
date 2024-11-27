import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import './navbar.styles.scss'
import useAuth from '../../hooks/useAuth'
import { signOutUser, successToast } from '../../utils/firebase/firebase.utils'
import { useNavigate } from 'react-router-dom'
import { FaOutdent } from 'react-icons/fa6'
import { BsCaretRight, BsCaretRightFill } from 'react-icons/bs'
import siteLogo from '../../assets/images/cakeIcon.png'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/#contact' },
  { name: 'Book', href: '/book' },
]

export default function Navbar1() {

  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { currentUser, setCurrentUser } = useAuth();


  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
    successToast('Logout Successful..!');

    localStorage.setItem('curUser', '');
    navigate('/');
    // console.log(localStorage.getItem('curUser'));
  }

  return (
    <header className="absolute inset-x-0 top-0 z-50 h-20 shadow-md">
        <nav className="flex items-center justify-between p-6 lg:px-8 bg-orange-400/50" aria-label="Global">
            <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                {/* <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
                /> */}
                <h2 className='text-logo'>Cake by Sandy</h2>
            </a>
            </div>
            
            <div className="flex lg:hidden">
            <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
            >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            </div>

            <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-xs font-medium uppercase tracking-wider leading-6 text-gray-900 hover:opacity-60">
                {item.name}
                </a>
            ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            { currentUser ?
            <>
                <a href='/manage' className="rounded-md bg-orange-400/80 px-3.5 py-1.5 mx-1 text-sm font-normal text-brown-800 shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">
                    Manage
                </a>
                <a onClick={signOutHandler} className="rounded-md bg-brown-800 px-3.5 py-1.5 text-sm font-normal text-white shadow-sm hover:opacity-90">
                    Logout
                </a>
            </>
            :
            <a href="/manage" className="text-sm font-semibold leading-6 text-gray-900">
                Log in <span aria-hidden="true">&rarr;</span>
            </a>
            }
            </div>
        </nav>

        <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                    className="h-8 w-auto"
                    src={siteLogo}
                    alt=""
                />
                </a>
                <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
                >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="-mx-3 block rounded-lg bg-orange-500/10 px-3 py-2 text-sm font-normal uppercase tracking-wider leading-7 text-gray-900 hover:bg-gray-50" >
                        <BsCaretRightFill className='mt-1.5 mr-3 float-left' />
                        {item.name}
                    </a>
                    ))}
                </div>
                <div className="py-6">
                    { currentUser ?
                    <a onClick={signOutHandler} className="rounded-md bg-brown-800 px-3.5 py-2 text-sm uppercase font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                    >
                        Logout
                    </a>
                    :
                    // <a href="/manage" 
                    // className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    // >
                    // Log in
                    // </a>
                    <a href='/manage' className="rounded-md bg-orange-500/80 px-5 py-2 m-auto text-sm font-medium uppercase text-brown-800 shadow-sm hover:bg-orange-400">
                        Login
                    </a>
                    }
                </div>
                </div>
            </div>
            </DialogPanel>
        </Dialog>
    </header>
  )
}
