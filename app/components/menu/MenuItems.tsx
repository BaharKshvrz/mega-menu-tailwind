import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import MenuItem from './MenuItem'
import SubCategories from './SubCategories'

type MenuItemsProps = {
  title: string,
  classNames: (...classes: string[]) => string,
  className: string,
  categoriesData: Category[],
}

const MenuItems = ({ title, classNames, className, categoriesData }: MenuItemsProps) => {

  return (
    <>
      <li className={className}>
        {/* MEGA MENU */}
        <Menu as='div' className='relative text-right z-50'>
          <Menu.Button className='flex justify-center items-center bg-opacity-20 text-sm text-black font-extrabold hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
            <ChevronDownIcon
              className='-mr-1 ml-2 h-5'
              aria-hidden='true'
            />
            {title}
          </Menu.Button>

          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-100'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items className='origin-top-lef absolute -right-96 mt-2 rounded-2xl divide-y divide-gray-100 focus:outline-none'>
              <div className="top-0  transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[70vw] transform">
                <div className="relative top-0 p-2 bg-white rounded-2xl shadow-xl w-full">
                  <div className="relative z-10">
                    <div className="grid grid-cols-[minmax(900px,_1fr)_200px] gap-5 text-black">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='#'
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'text-sm  inline-block'
                            )}
                          >
                            {/* LEFT MENU OF SUB MENUS */}
                            <div className='flex flex-wrap justify-start'>
                              <SubCategories categories={categoriesData[0].sub_category} />
                            </div>
                            {/* END OF  LEFT MENU OF SUB MENUS */}
                          </a>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='#'
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'text-sm flex-1'
                            )}
                          >

                            {/* RIGHT MENU OF SUB MENUS */}
                            <ul role="list" className='list-none'>
                              {categoriesData && categoriesData.map(category =>
                                <MenuItem
                                  key={category.id}
                                  className="hover:bg-gray-200 py-4 px-4 text-sm font-semibold cursor-pointer"
                                  title={category.name}
                                />
                              )}
                            </ul>
                            {/* END OF RIGHT MENU OF SUB MENUS */}
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </div>
                </div>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </li>
    </>
  )
}

export default MenuItems
