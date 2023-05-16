import { useSelector } from 'react-redux';
import { CartIcon } from './../icons';

import React from 'react'

 const Navbar = () => {
  return (
    <nav>
      <div className='nav-center'>
        <h3>Navbar</h3>
        <div className='nav-container'>
          <CartIcon />
          <div className='amount-container'>
            <p className='total-amount'>{useSelector((store)=> store.cart.amount)}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;

