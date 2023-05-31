// @/models/NavLinks.d.ts

/**
 * Base nav item, displayed as text
 */
export interface NavItem {
    name: string;
  }
  
  /**
   * Base nav group, has nav items sub categories
   */
  export interface NavGroup<T> extends NavItem {
    sub_category: T[];
  }
  
  /**
   * NavLink, i.e. inherited from NavItem, but extended with link properties.
   */
  export interface NavLink extends NavItem {
    link: string;
    rel?: string;
    target?: string;
  }
  
  /**
   * Navbar Contents
   */
  export type NavbarItem = NavLink;
  export type NavbarGroup = NavGroup<NavbarGroup | NavbarItem | string>;
  export type NavbarContents = (NavbarItem | NavbarGroup | string)[];
  