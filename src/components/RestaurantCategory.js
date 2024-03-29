import React, { useState } from 'react'
import RestaurantCategoryMenu from './RestaurantCategoryMenu'

const RestaurantCategory = ({eachCategory,showItem,setShowIndex}) => {


const handleClick=()=>{
  setShowIndex();
}
 

  return (
    <div>
    <div className='w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ' onClick={handleClick}>
      <div className='flex justify-between'>
      <span className='font-bold text-xl cursor-pointer'>{eachCategory?.card?.card?.title}{"  ("+eachCategory?.card?.card?.itemCards?.length+")"}</span>
      
      <span>👇</span>
      </div>
      {showItem && <RestaurantCategoryMenu items={eachCategory?.card?.card?.itemCards}/>}
      </div>
  </div>
  )
}

export default RestaurantCategory