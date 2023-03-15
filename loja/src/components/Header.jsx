import React from 'react'
import {Link } from 'react-router-dom'
import '../pages/store.css'

const Header = () => {
  return (
    <div className='container-header'>
    <Link className='link-shop' to='/'>voltar as Compras</Link>
    

    </div>
  )
}

export default Header