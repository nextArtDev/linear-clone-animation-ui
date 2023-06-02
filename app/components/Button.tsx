import Link from 'next/link'
import React, { ReactNode } from 'react'
import classNames from 'classnames'
import { cva, VariantProps } from 'class-variance-authority'
interface ButtonProps extends VariantProps<typeof buttonClasses> {
  children: ReactNode
  href: string
  className: string
}

const buttonClasses = cva(`rounded-full inline-flex items-center`, {
  variants: {
    variant: {
      primary:
        'bg-primary-gradient hover:shadow-primary hover:text-shadow [&_icon-wrapper]:-ml-2 transition-[shadow, text-shadow]',
      secondary:
        'text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] [&_icon-wrapper]:bg-transparent-white [&_icon-wrapper]:rounded-full [&_icon-wrapper]:px-2 [&_icon-wrapper]:ml-2 [&_icon-wrapper]:-mr-2 hover:bg-opacity-20 transition-colors ease-in ',
    },
    size: {
      small: 'text-xs px-3 h-7 ',
      medium: 'text-sm px-4 h-8 ',
      large: 'text-md px-6 h-12 ',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
})

export const IconWrapper = ({ children }: { children: ReactNode }) => (
  <span className="icon-wrapper">{children}</span>
)
const Button = ({ children, href, variant, size, ...props }: ButtonProps) => {
  return (
    <Link
      href={href}
      className={buttonClasses({ variant, size, className: props.className })}
    >
      {children}
    </Link>
  )
}

export default Button
