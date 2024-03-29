import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const RestaurantCategoryMenu = ({items}) => {
    
    const dispatch=useDispatch()
    const cart = useSelector((store)=>store.cart.items);
    

    const handleAddItem = (item) =>{
      dispatch(addItem(item));
    }

  return (
    <div>
      {items.map((item,index)=>(
        <div key={index}
        className='p-2 m-2 border-gray-200 border-b-2 text-left flex '
        >
         <div className='w-9/12'> 
          <div className=' py-2'>
            <span>{item.card.info.name}</span>
            <span> - Rs.
              {item.card.info.price 
              ?item.card.info.price/100
              : item.card.info.defaultPrice/100  
            }
            </span>
          </div>


          <p className='text-xs'>{item.card.info.description}</p>
          </div>
          <div className='w-3/12'>
          <div className='absolute '>  
          
          <button onClick={()=>handleAddItem(item)} className='p-1 mx-[40px] mb-0 rounded-lg bg-[#333] text-white shadow-lg m-auto'>Add +</button>          
          
          </div>
          
          <img  className="rounded-lg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+item?.card?.info?.imageId} />

          </div>
        </div>
        

      ))

      }
    </div>
    
  )
  
}

export default RestaurantCategoryMenu;