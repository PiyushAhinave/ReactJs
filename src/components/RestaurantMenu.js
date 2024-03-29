import { useState,useEffect } from "react";
import Shimmer from "./Shimmer.js";
import { useParams } from "react-router-dom";
import { MenuApi } from "../utils/Constants.js";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import RestaurantCategory from "./RestaurantCategory.js";


const RestaurantMenu = () => {

    const[showIndex,setShowIndex] = useState(null);

  
    
    const {resId} = useParams();

    
     const resInfo = useRestaurantMenu(resId); 
     
    if (resInfo === null) return <Shimmer/>;
    const {name,cuisines,id,costForTwo} = resInfo?.cards[2]?.card?.card?.info;

    console.log(resInfo?.cards[2]?.card?.card?.info)

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
   

const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;


const eachCategory = categories.filter((c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" );


    return (
        <div className="  my-6 mx-auto  ">
            <div className="text-center border-b-2">
            <h1 className="m-2  text-2xl font-bold font-serif">{name}</h1>
            <h4 className="m-2 text-xl font-bold">{cuisines.join(",")} - Rs.{costForTwo/100}</h4>
            </div>
            <div className='shadow-gray-900 shadow-bottom-2'>
                {
                  eachCategory.map((e,index)=><RestaurantCategory key={e.card?.card?.title} eachCategory={e}
                  showItem={index===showIndex ? true : false}
                  setShowIndex={()=>(setShowIndex(index) )}
                  index={index}
                  />)
                      
                }
            </div>
            
        </div>
    )
}

export default RestaurantMenu;