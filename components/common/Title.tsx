import React from 'react'

interface TitleProps {
    title: string
}
const Title: React.FC<TitleProps> = ({title}) => {
  return (
    <h1 className='text-[34px] font-black my-6'>
        {title}
    </h1>
  )
}

export default Title

