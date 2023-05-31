"use client"
import SearchBox from './SearchBox'
import Image from 'next/image'
import MenuItem from './menu/MenuItem'
import MenuItems from './menu/MenuItems'

type MenubarProps = {
  classNames: (...classes: string[]) => string,
  menusData: MenuItem[],
  categoriesData: Category[],
}

const MenuBar = ({ classNames, menusData, categoriesData }: MenubarProps) => {
  return (
    <div className="hidden md:block">
      <div className="flex h-20 items-center justify-between">
        <div className="flex items-center pl-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-9 h-9 text-gray-500">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>

          <div className="relative flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-9 h-9 text-gray-500">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <span className="absolute  bottom-0 rounded-full bg-purple-500 w-4 h-4 bottom   text-white font-mono text-xs  leading-tight text-center">2
            </span>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="flex items-center">
            <ul className='flex items-center  text-black cursor-pointer'>
              {menusData &&
                menusData.map(menu => {
                  if (menu.link === "used") {
                    return <MenuItems
                      key={menu.id}
                      title={menu.title}
                      classNames={classNames}
                      categoriesData={categoriesData}
                      className="group p-2" />
                  } else {
                    return <MenuItem key={menu.id} title={menu.title} className="p-2" />
                  }
                })
              }
            </ul>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="flex items-center">
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
        <div className="lg:hidden w-full">
          <div className="flex items-center" >
            <SearchBox />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuBar
