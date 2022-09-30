import React from 'react'
import '../Style/HeaderText.scss'

const HeaderText = ({text}) => {
  return (
    <h1 className='headerText'>
      {text}
    </h1>
  )
}

export default HeaderText
