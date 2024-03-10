import ResCard from "./ResCard.js";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {
  const [restList, setrestList] = useState([]);
  const [searchText,setSearchText]= useState("");
  const [filterList,setFilterList]= useState([]);
  const onlineStatus = useOnlineStatus();
  
  useEffect(
    () => {fetchdata()},[]
    );
  const fetchdata = async() =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.571246&lng=73.817174&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    setrestList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setFilterList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  };
/*
  if (restList.length == 0){
    return <Shimmer/>
  }
 */ 
 if (onlineStatus === false) return <h1>You are offline please check internet connection!!!</h1>;
  return (
    <div className="body">
      <div className="searchbar">
        <input type="text" className="search" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
        <button className="search-btn" onClick={()=>{const searchList = restList.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));setFilterList(searchList);}}>Search</button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restList.filter((res) => {
             return res.info.avgRating > 4.2;
            });
            setFilterList(filteredList);
          }}
        >
          Top rated
        </button>
      </div>
      <div className="allCard">
        {/* <ResCard resData={resData}/>  we used this for taking value by passing object*/}
        {/* {<ResCard {...resData}/>}  this used to pass value directly*/}
        {filterList.map((restaurant) => (
          <Link to={"/restaurantmenu/"+restaurant.info.id}><ResCard key={restaurant.info.id} resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
