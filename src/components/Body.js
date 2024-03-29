import ResCard,{withPromoted} from "./ResCard.js";
import {useContext, useState,useEffect,  } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";


const Body = () => {
  const [restList, setrestList] = useState([]);
  const [searchText,setSearchText]= useState("");
  const [filterList,setFilterList]= useState([]);
  const onlineStatus = useOnlineStatus();
  
 const {loggedInUser,setUserName}= useContext(UserContext);

const Promoted = withPromoted(ResCard);
  
  
useEffect(
  () => {fetchdata()},[]
  );

  const fetchdata = async() =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.571246&lng=73.817174&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    setrestList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setFilterList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    
  };


  if (restList.length == 0){
    return <Shimmer/>
  }
 
 if (onlineStatus === false) return <h1>You are offline please check internet connection!!!</h1>;

  return (
    <div className="body">
      <div className="inline">
        <input type="text" className="m-2 p-2 border-[1px] border-gray-900 bg-gray-200 rounded-lg" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
        <button className="m-2 p-2 border-[1px] border-gray-800 bg-green-200 hover:bg-green-600 rounded-lg" onClick={()=>{const searchList = restList.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));setFilterList(searchList);}}>Search</button>
        <button className="m-2 p-2 border-[1px] border-gray-800 bg-green-200 hover:bg-green-600 rounded-lg"
          onClick={() => {
            const filteredList = restList.filter((res) => {
             return res.info.avgRating > 4.2;
            });
            setFilterList(filteredList);
          }}
        >
          Top rated
        </button>
        <label>User Name :</label>
        <input type="text" className="m-2 p-2 border-[1px] border-gray-900 bg-gray-200 rounded-lg" value={loggedInUser} onChange={(e) => setUserName(e.target.value)}/>
      </div>
      <div className="flex flex-wrap justify-between">
        {/* <ResCard resData={resData}/>  we used this for taking value by passing object*/}
        {/* {<ResCard {...resData}/>}  this used to pass value directly*/}
        {filterList.map((restaurant) => (
          
          <Link 
            key={restaurant.info.id}
            to={"/restaurantmenu/"+restaurant.info.id}
            >
              {
                restaurant.info.aggregatedDiscountInfoV3 != null ?(<Promoted resData={restaurant}/>):<ResCard resData={restaurant}/>
              }
              
              
              
            
            
          </Link>
        ))}
        
      </div>
    </div>
  );
};

export default Body;
