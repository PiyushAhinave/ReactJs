//this is to pass array
const ResCard = (props) => {
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla} = props.resData?.info;
    
    return (
        <div className="rescard">
            <div>
            <img className="resimg" alt="Res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+props.resData.info.cloudinaryImageId}/>
            </div>
            <div className="resdetails">
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating} </h4>
                <h4>{costForTwo}</h4>
                <h4>{sla.deliveryTime} minutes</h4>
            </div>
        </div>
    )
  }

  export default ResCard;