import React from 'react'
import Estudiante from '../Item/Estudiante'
import Universidad from '../Item/Universidad'

export default function Footer() {
  return (
    <div className='flex footerContainer'>
      <Estudiante/>
      <Universidad/>
    </div>
  )
}
