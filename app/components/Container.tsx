import React, { ReactNode } from 'react'
import classNames from 'classnames'
type Props = {
  children: ReactNode
  className?: string
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={classNames('max-w-[120rem] mx-auto px-12 ', className)}>
      {children}
    </div>
  )
}

export default Container
