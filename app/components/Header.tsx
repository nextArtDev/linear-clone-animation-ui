'use client'
import React, { useEffect, useState } from 'react'
import Logo from './icons/Logo'
import Link from 'next/link'
import Container from './Container'
import Button from './Button'
import HamburgerIcon from './icons/HamburgerIcon'
import classNames from 'classnames'

type Props = {}

const Header = (props: Props) => {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false)

  useEffect(() => {
    const html = document.querySelector('html')
    if (html) html.classList.toggle('overflow-hidden', hamburgerMenuIsOpen)
  }, [hamburgerMenuIsOpen])

  useEffect(() => {
    const closeHamburgerNavigation = () => setHamburgerMenuIsOpen(false)

    window.addEventListener('orientationchange', closeHamburgerNavigation)
    window.addEventListener('resize', closeHamburgerNavigation)

    return () => {
      window.removeEventListener('orientationchange', closeHamburgerNavigation)
      window.removeEventListener('resize', closeHamburgerNavigation)
    }
  }, [setHamburgerMenuIsOpen])
  return (
    <header className="fixed top-0 left-0 w-full border-b border-[#ffffff20] backdrop-blur-md ">
      <Container className="flex h-[var(--navigation-height)] items-center ">
        <Link href="/" className="flex items-center  ">
          <Logo className=" mr-16 ml-6" />
        </Link>
        <div
          className={classNames(
            'transition-[visibility] md:visible ',
            hamburgerMenuIsOpen ? 'visible ' : 'invisible delay-500 '
          )}
        >
          <nav
            className={classNames(
              ' md:opacity-100 h-[calc(100vh_-_var(--navigation-height))] md:h-auto md:relative fixed top-[var(--navigation-height)] md:top-0 left-0 w-full md:w-auto overflow-auto bg-background md:bg-transparent  transition-opacity duration-500 md:translate-x-0',
              hamburgerMenuIsOpen
                ? ' opacity-100 translate-x-0 '
                : ' opacity-0 translate-x-[-100vw] '
            )}
          >
            <ul
              className={classNames(
                'flex flex-col md:flex-row md:items-center h-full [&_a]:flex [&_a]:items-center [&_a:hover]:text-grey [&_a]:text-md md:[&_a]:text-sm [&_li]:ml-6 [&_li]:border-b md:[&_li]:border-none [&_li]:border-grey-dark [&_a:hover]:transition-[color, transform] [&_a]:h-[var(--navigation-height)] [&_a]:w-full md:[&_a]:translate-y-0 [&_a]:translate-y-8  [&_a]:transition-transform [&_a]:duration-300 ease-in ',
                hamburgerMenuIsOpen && '[&_a]:translate-y-0'
              )}
            >
              <li>
                <Link href="#">Features</Link>
              </li>
              <li>
                <Link href="#">Method</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="#">Customers</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="#">Changelog</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="#">Integrations</Link>
              </li>
              <li>
                <Link href="#">Pricing</Link>
              </li>
              <li>
                <Link href="#">Company</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="ml-auto h-full flex items-center">
          <Link className="text-sm mr-6" href="#">
            Log in
          </Link>
          <Button variant="primary" href="#">
            Sign up
          </Button>
        </div>

        <button
          className="ml-8 text-3xl md:hidden "
          onClick={() => setHamburgerMenuIsOpen((open) => !open)}
        >
          <span className="sr-only">Toggle menu</span>
          <HamburgerIcon hamburgerMenuIsOpen={hamburgerMenuIsOpen} />
        </button>
      </Container>
    </header>
  )
}

export default Header
