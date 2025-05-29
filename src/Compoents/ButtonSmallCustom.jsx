import React from 'react'
import './ComponentCss.css'

const ButtonSmall = ({text,bgColor}) => {
  return (
    <div className='btn-small-custom'  style={{ backgroundColor: bgColor }} >
        {text}
    </div>
  )
}

export default ButtonSmall
