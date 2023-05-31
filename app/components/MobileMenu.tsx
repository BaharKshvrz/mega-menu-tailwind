import { Disclosure } from '@headlessui/react'
import React from 'react'

type MobileMenuProps = {
    headerData: MenuItem[],
    classNames: (...classes: string[]) => string,
}

const MobileMenu = ({ headerData, classNames }: MobileMenuProps) => {
    return (
        <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 border-b-2">
                { headerData && headerData.map((item, i) => (
                    <Disclosure.Button
                        key={item.title}
                        as="a"
                        href={item.link}
                        className={classNames(
                            i === 1 ? 'bg-gray-200 text-black' : 'text-gray-300 hover:bg-gray-100 hover:text-gray-700',
                            'block rounded-md px-3 py-2 text-base text-right font-medium'
                        )}
                        aria-current={i === 1 ? 'page' : undefined}
                    >
                        {item.title}
                    </Disclosure.Button>
                ))}
            </div>
        </Disclosure.Panel>
    )
}

export default MobileMenu
