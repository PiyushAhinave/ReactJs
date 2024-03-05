import { useState,useEffect } from "react";
import Shimmer from "./Shimmer.js";
import { useParams } from "react-router-dom";
import { MenuApi } from "../utils/Constants.js";

const RestaurantMenu = () => {

    const[resInfo,SetResInfo]=useState(null);

    const {resId} = useParams();

    useEffect(()=>{fetchdata()},[]);
    const fetchdata = async() =>{
        const data = await fetch(MenuApi+resId)
        const json = await data.json();
        SetResInfo(json.data);
      };
      
    if (resInfo === null) return <Shimmer/>;
    const {name,cuisines,id,costForTwo} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);
    return (
        <div>
            <h1>{name}h1</h1>
            <h4>{cuisines.join(",")} - Rs.{costForTwo/100}</h4>
            <h4>Menu</h4>
            <ul>
            {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name}</li>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu;