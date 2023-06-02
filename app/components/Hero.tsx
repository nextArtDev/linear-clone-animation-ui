import classNames from 'classnames'
import React, { ReactNode } from 'react'
interface HeroProps {
  children: ReactNode
}
interface HeroElementProps {
  children: ReactNode
  className?: string
}
export const HeroTitle = ({ children, className }: HeroElementProps) => {
  return (
    <h1
      className={classNames(
        'text-5xl md:text-7xl leading-16 mb-4 text-gradient',
        className
      )}
    >
      {children}
    </h1>
  )
}
export const HeroSubTitle = ({ children, className }: HeroElementProps) => {
  return (
    <p
      className={classNames(
        'text-primary-text text-xl md:text-2xl leading-16 mb-8',
        className
      )}
    >
      {children}
    </p>
  )
}

const Hero = ({ children }: HeroProps) => {
  return <div className="text-center  ">{children}</div>
}

export default Hero
