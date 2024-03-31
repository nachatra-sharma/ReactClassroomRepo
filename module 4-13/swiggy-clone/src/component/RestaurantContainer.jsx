import { useState } from "react";
import RestaurantCard, { IsVeg } from "./RestaurantCard";
import Filter from "./Filter.jsx";
import Shimmer from "./Shimmer.jsx";
import { Link } from "react-router-dom";
import useRestaurantContainer from "../utils/useRestaurantContainer.js";

const RestaurantContainer = () => {
  // const [resCardData, setResCardData] = useState([]);
  // const [filterData, setFilterData] = useState(null);

  const data = useRestaurantContainer();
  // if (!data) return;
  // else setResCardData(data);

  // setFilterData(data);
  // console.log(data);
  // setFilterData(data);

  // const handleFilter = (result) => {
  //   setFilterData(result);
  // };

  const IsVegRestaurantCard = IsVeg(RestaurantCard);
  return (
    <div className='restaurant_body'>
      {/* <Filter onFilter={handleFilter} resData={data} /> */}
      <div className='restaurant_container'>
        {!data ? (
          <Shimmer />
        ) : (
          data.map((restaurant) => (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}>
              {/* <RestaurantCard resInfo={restaurant} /> */}
              {console.log(restaurant.info?.veg)}
              {restaurant.info.veg ? (
                <IsVegRestaurantCard resInfo={restaurant} />
              ) : (
                <RestaurantCard resInfo={restaurant} />
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default RestaurantContainer;
