import { RESTAURANT_IMAGE_CDN_URL } from "../utils/constant.js";
const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, areaName, cuisines, avgRating } =
    props.resInfo.info;
  const { slaString } = props.resInfo.info.sla;
  const { header, subHeader } =
    props?.resInfo?.info?.aggregatedDiscountInfoV3 || {};
  return (
    <div className='restaurant_card_container'>
      <div className='restaurant_image_container'>
        <img src={RESTAURANT_IMAGE_CDN_URL + cloudinaryImageId} alt='' />
        <div className='overlay'></div>
        <div className='img_overflow'>
          {header === undefined && subHeader === undefined ? (
            <></>
          ) : (
            <h4> {header + " " + subHeader}</h4>
          )}
        </div>
      </div>
      <div className='restaurant_info'>
        <h3>{name}</h3>
        <span>
          {avgRating} <div className='dot'></div> {slaString}
        </span>
        <p>{cuisines.join(", ")}</p>
        <p>{areaName}</p>
      </div>
    </div>
  );
};

export const IsVeg = (RestaurantCard) => {
  return (props) => {
    return (
      <div className='isVeg'>
        {props.resInfo.info.veg ? (
          <p className='veg'>veg</p>
        ) : (
          console.log("Don't Print")
        )}
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
