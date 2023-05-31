import React from 'react'

type MenuItemProps = {
    title: string,
    className: string,
}

const MenuItem = ({title, className}: MenuItemProps) => {
  return (
    <>
      <li className={className}>{title}</li> 
    </>
  )
}

export default MenuItem
