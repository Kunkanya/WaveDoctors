import React from 'react'
import '../Style/Btn.scss'
const Btn = ({text, link}) => {

    const addLinke = (text, link)=>{
        return (
            <a target="blank" href={link}>{text}</a>
        )
    }

  return (
    <div className='btn-container'>
        {link ? addLinke(text, link) : text}
    </div>
  )
}

export default Btn
