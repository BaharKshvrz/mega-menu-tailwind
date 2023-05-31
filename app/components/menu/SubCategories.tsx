
import { ChevronDownIcon } from "@heroicons/react/solid";
import { NavbarContents, NavbarItem, NavbarGroup } from "../../../NavLinks";
import Link from "next/link";

type NavMenuProps = {
  categories: Category[],
}

export default function SubCategories({ categories }: NavMenuProps) {
  const renderMenu = (links: NavbarContents, ulClass: string, classes: string) => {
    return (
      <ul className={ulClass}>
        {links.map((menuItem: NavbarItem | NavbarGroup | string, i) => (
          <li className={classes}>
            {menuItem?.sub_category && menuItem?.sub_category.length > 1 ?
              (<div className="flex items-center justify-end">
                <ChevronDownIcon
                  className='-mr-1 ml-2 h-5'
                  aria-hidden='true'
                />
                <Link href={menuItem?.link ? menuItem?.link : '#'}>{menuItem?.name}</Link>
              </div>) : <Link href={menuItem?.link ? menuItem?.link : '#'}>{menuItem?.name}</Link>
            }
            {menuItem?.sub_category && menuItem?.sub_category.length > 1 && renderMenu(menuItem?.sub_category, '', 'max-w-xl p-2 break-words')}
          </li>
        ))
        }
      </ul>
    )
  };

  return <>{renderMenu(categories, 'flex flex-wrap flex-row-reverse', 'max-w-xl p-2 break-words')}</>;
}
