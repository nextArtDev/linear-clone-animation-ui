// icon:menu-4-line | Remix Icon https://remixicon.com/ | Remix Design
import * as React from 'react'
type HamburgerIcon = {
  props?: React.SVGProps<SVGSVGElement>
  hamburgerMenuIsOpen: boolean
}
function HamburgerIcon({ props, hamburgerMenuIsOpen }: HamburgerIcon) {
  const content = !hamburgerMenuIsOpen ? (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
      className="transition-all duration-500 "
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M16 18v2H5v-2h11zm5-7v2H3v-2h18zm-2-7v2H8V4h11z" />
    </svg>
  ) : (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
      className="transition-all duration-500 "
    >
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
    </svg>
  )
  return content
}

export default HamburgerIcon
