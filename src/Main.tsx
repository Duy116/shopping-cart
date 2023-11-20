import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

function Main() {
  return (
    <div className='background'>
        <h1 className='mg-10'>Shopping Cart</h1>
        <NavLink to='/products' 
            className={({ isActive }) => isActive ? "link-active" : "link"}><b>Products</b></NavLink>
        <NavLink to='/cart' 
            className={({ isActive }) => isActive ? "link-active" : "link"}><b>Cart</b></NavLink>
        <Outlet />
    </div>
  )
}

export default Main;