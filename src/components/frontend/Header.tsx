import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FACEBOOK_LOGO, INSTAGRAM_LOGO, LINKDN_LOGO, SOCIAL_MEDIA_ICON } from '../../Constants/frontend/constance'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <Disclosure as="nav" >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-16">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ">
                <div className="flex flex-shrink-0 items-center">
                  <div className='rounded-full h-6 w-6 bg-yellow-500'></div>
                  <h1 className='mx-3 font-bold text-black text-2xl'>Jamshad</h1>
                  <h3 className='mt-1'>Developer</h3>
                </div>
                <div className="hidden sm:block lg:ms-80">
                  <div className="flex">
                    <Link
                      to={''}
                      className="group  text-gray-800 hover:text-rose-500 py-2 text-base font-normal relative"
                    >
                      <span className='border-r border-gray-600 px-3'>Home</span>
                      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-rose-500 transform scale-x-0 group-hover:scale-x-50 transition-transform"></div>
                    </Link>

                    <Link
                      to={''}
                      className="group  text-gray-800 hover:text-rose-500 py-2 text-base font-normal relative"
                    >
                      <span className='border-r border-gray-600 px-3'>About</span>
                      <div className="absolute inset-x-0 bottom-0 h-0.5 px-1 bg-rose-500 transform scale-x-0 group-hover:scale-x-50 transition-transform"></div>
                    </Link>

                    <Link
                      to={''}
                      className="group  text-gray-800 hover:text-rose-500 py-2 text-base font-normal relative"
                    >
                      <span className='border-r border-gray-600 px-3'>Contact</span>
                      <div className="absolute inset-x-0 bottom-0 h-0.5 px-1 bg-rose-500 transform scale-x-0 group-hover:scale-x-50 transition-transform"></div>
                    </Link>
                  </div>
                </div>

              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={SOCIAL_MEDIA_ICON}
                        alt="Visit"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        <a
                          href="#"
                          className='block px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100'
                        >

                          <img
                            src={FACEBOOK_LOGO}
                            alt="Facebook Logo"
                            className="h-6 w-6 inline-block rounded-full "
                          />
                          <span className='ml-1'>Facebook</span>
                        </a>
                      </Menu.Item>
                      <Menu.Item>
                        <a
                          href="#"
                          className='block px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100'
                        >

                          <img
                            src={INSTAGRAM_LOGO}
                            alt="Facebook Logo"
                            className="h-6 w-6 inline-block ml-1 rounded-full "
                          />
                          <span className='ml-1'>Instagram</span>
                        </a>
                      </Menu.Item>
                      <Menu.Item>
                        <a
                          href="#"
                          className='block px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100'
                        >

                          <img
                            src={LINKDN_LOGO}
                            alt="Facebook Logo"
                            className="h-6 w-6 inline-block ml-1 rounded-full "
                          />
                          <span className='ml-1'>Linkedin</span>
                        </a>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">

              <Disclosure.Button
                as="a"
                className='text-gray-800 hover:bg-gray-200 hover:text-black block rounded-md px-3 py-2 text-base font-medium'
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                className='text-gray-800 hover:bg-gray-200 hover:text-black block rounded-md px-3 py-2 text-base font-medium'
              >
                Course
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                className='text-gray-800 hover:bg-gray-200 hover:text-black block rounded-md px-3 py-2 text-base font-medium'
              >
                About
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                className='text-gray-800 hover:bg-gray-200 hover:text-black block rounded-md px-3 py-2 text-base font-medium'
              >
                Contact
              </Disclosure.Button>

            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}