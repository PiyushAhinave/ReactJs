import { useState,useEffect } from "react";
import { MenuApi } from "./Constants";
const useRestaurantMenu = (resId) => {

    const[resInfo,SetResInfo]=useState(null);

    useEffect(()=>{
        fetchdata()
    },[])

    const fetchdata = async() => {

        const data = await fetch(MenuApi+resId);
        const json = await data.json();
        
        SetResInfo(json.data)
        
    }


    return resInfo;
}

export default useRestaurantMenu;