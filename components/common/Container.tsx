import React from 'react'

const Container = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className='max-w-[1260px] w-full px-[30px]'>
      {children}
    </div>
  )
}

export default Container

