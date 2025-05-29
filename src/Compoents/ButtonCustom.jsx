import React from 'react'
import './ComponentCss.css'

const ButtonCustom = ({text,bgColor}) => {
  return (
    <div className='btn-custom'  style={{ backgroundColor: bgColor }} >
        {text}
    </div>
  )
}

export default ButtonCustom
