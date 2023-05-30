import React, { ReactNode } from 'react'
interface HeroProps {
  children: ReactNode
}
interface HeroElementProps {
  children: ReactNode
}
export const HeroTitle = ({ children }: HeroElementProps) => {
  return <h1 className="text-7xl leading-16 mb-8 ">{children}</h1>
}
export const HeroSubTitle = ({ children }: HeroElementProps) => {
  return <p className="text-2xl leading-16 mb-8">{children}</p>
}

const Hero = ({ children }: HeroProps) => {
  return <div className="text-center">{children}</div>
}

export default Hero
