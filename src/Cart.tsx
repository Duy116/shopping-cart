import React from 'react'
import { ItemProps } from './Props';

function Cart({ items }: ItemProps) {
  const [ isShow, setIsShow ] = React.useState(false)
  let totalItem = items.reduce((acc, item) => acc + item.amount, 0);
  let totalPrice = items.reduce((acc, item) => acc + item.price * item.amount, 0);

  return (
    <div className='mg-10'>
        <h2>Cart</h2>
        <div>
          <ul>
            {items.map((item) =>
              <li>
                <div className='item'>
                  <h4>{item.name}</h4>
                  <h4>{item.amount}</h4>
                  <h4 style={{ marginLeft: "auto", color: "red" }}>{item.price}</h4>
                </div>
              </li>
            )}
          </ul>
        </div>
        <button className='button' onClick={() => setIsShow(true)} style={{ margin: "10px" }}>Check out</button>
        <div className='total' hidden={!isShow}>
          <h2>Total items: {totalItem}</h2>
          <h2>Total price: <span style={{ color: "red" }}>{totalPrice}</span></h2>
        </div>
    </div>
  )
}

export default Cart;