import React from 'react'
import "../app/styles/heading.css"

interface propsType{
    title:string;
}

const Heading:React.FC<propsType> = ({title}) => {
  return (
    <div className='heading-div'>
      <p className='heading-para'>{title}</p>
    </div>
  )
}

export default Heading
