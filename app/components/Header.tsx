"use client"
import { Fragment} from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import SearchBox from './SearchBox'
import Image from 'next/image'

type HeaderProps = {
    open: boolean,
    classNames: (...classes: string[]) => string,
    headerData: MenuItem[],
}

const Header = ({ open, classNames, headerData }: HeaderProps) => {
    return (
        <div className="relative flex h-16 items-center justify-between px-2 sm:px-6 bg-[#f1f1f1]">
            <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>

                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                            stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round"
                                strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                    )}
                </Disclosure.Button>
            </div>

            <div className='hidden md:block'>
                <div className="flex flex-1 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-700">
                        <path d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                    </svg>
                    <span className='ml-2  text-gray-700'>۰۲۱-۷۷۸۸۸۲۲۲</span>
                </div>
            </div>

            <div className="md:hidden w-full">
                <div className="flex items-center" >
                    <SearchBox />
                </div>
            </div>

            <div className="flex flex-1 items-center justify-center">
                <div className="invisible md:visible lg:hidden">
                    <Image
                        className="h-8 w-auto"
                        src="/images/logo.png"
                        width={100}
                        height={96}
                        alt="Your Company"
                        priority={true}
                    />
                </div>
            </div>

            <div className="flex flex-1 items-center  sm:items-stretch sm:justify-end">
                <div className="hidden sm:ml-6 sm:block">
                    <div className="space-x-4 hidden lg:block">
                        { headerData && headerData.map((item, i) => (
                            <a
                                key={item.title}
                                href={item.link}
                                className={classNames(
                                    i === 1 ? 'text-gray' : 'text-gray-400 hover:text-black',
                                    'px-3 py-2 text-sm font-medium'
                                )}
                                aria-current={i === 1 ? 'page' : undefined}
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href="#"
                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                    >
                                        Your Profile
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>60
                                {({ active }) => (
                                    <a
                                        href="#"
                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                    >
                                        Settings
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href="#"
                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                    >
                                        Sign out
                                    </a>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
    )
}

export default Header
