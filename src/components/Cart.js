import React from 'react';
import RestaurantCategoryMenu from "./RestaurantCategoryMenu";
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {

const dispatch = useDispatch();
const cartItems = useSelector((store)=>store.cart.items);
const handleClearCart = () =>{
    dispatch(clearCart());
}

  return (
    
    <div className='text-center m-4 p-4'>
        <h1 className='text-2xl font-bold'>Cart</h1>
        <div className='w-6/12 m-auto'>
            <RestaurantCategoryMenu items={cartItems}/>
            <button onClick={handleClearCart} className='bg-black text-white rounded-lg m-2 p-2'>
                Clear Cart
            </button>
           
        </div>
    </div>
    
  )
}

export default Cart