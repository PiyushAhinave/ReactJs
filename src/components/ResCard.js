//this is to pass array
const ResCard = (props) => {
    
    const {name,cuisines,avgRating,costForTwo,sla} = props.resData?.info;
    
    return (
        <div className="m-2 p-2 w-[250px]  bg-gray-300 rounded-lg hover:bg-gray-600 hover:text-white ">
            <div>
            <img className="p-2 h-[150px] w-[246px] rounded-lg" alt="Res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+props.resData.info.cloudinaryImageId}/>
            </div>
            <div>
                <h3 className="font-bold">{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating} </h4>
                <h4>{costForTwo}</h4>
                <h4>{sla.deliveryTime} minutes</h4>
                
                </div>
        </div>
        
    )
    
  }

 export const withPromoted = (ResCard) => {
    return (props) => {
        return (
        <div>
            <label className="absolute ml-2 rounded-lg text-white bg-black">{props.resData.info.aggregatedDiscountInfoV3.header+" "+" "+props.resData.info.aggregatedDiscountInfoV3.subHeader}</label>
            <ResCard {...props}/>
        </div>
        );
    };
 }; 
  

  export default ResCard;