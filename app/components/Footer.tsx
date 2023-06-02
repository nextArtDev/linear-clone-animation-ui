import React from 'react'
import Container from './Container'
import Link from 'next/link'
import Logo from './icons/Logo'
import IconTelegram from './icons/Telegram'
import IconSquareInstagram from './icons/Instagram'
import IconSquareWhatsapp from './icons/WhatsApp'

type Props = {}

const footerLinks = [
  {
    title: 'Product',
    links: [
      { title: 'Features', href: '#' },
      { title: 'Integrations', href: '#' },
      { title: 'Pricing', href: '#' },
      { title: 'changelog', href: '#' },
      { title: 'Docs', href: '#' },
      { title: 'Linear Methods', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'About us', href: '#' },
      { title: 'Blog', href: '#' },
      { title: 'Careers', href: '#' },
      { title: 'Customers', href: '#' },
      { title: 'Brand', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { title: 'Community', href: '#' },
      { title: 'Contact', href: '#' },
      { title: 'DPA', href: '#' },
      { title: 'Terms of services', href: '#' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { title: 'API', href: '#' },
      { title: 'Status', href: '#' },
      { title: 'Github', href: '#' },
    ],
  },
]

const Footer = (props: Props) => {
  return (
    <footer className=" border-t border-offWhite/20 py-14 text-sm ">
      <Container className="flex flex-col md:flex-row justify-between ">
        <div>
          <div className="flex flex-row lg:flex-col h-full justify-between ">
            <div className="flex text-grey items-center">
              <Logo className="mr-4" />
            </div>
            <div className="mt-auto flex space-x-4 text-2xl text-grey  ">
              <IconTelegram className="cursor-pointer" />
              <IconSquareInstagram className="cursor-pointer" />
              <IconSquareWhatsapp className="cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap ">
          {footerLinks.map((column) => (
            <div
              className="lg:min-w-[11.25rem] min-w-[50%] mt-10 lg:mt-0 "
              key={column.title}
            >
              <h3 className="mb-3 font-medium">{column.title}</h3>
              <ul>
                {column.links.map((link) => (
                  <li className="[&_a]:last:mb-0" key={link.title}>
                    <Link
                      href={link.href}
                      className=" block mb-3 text-grey hover:text-off-white transition-colors "
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  )
}

export default Footer
