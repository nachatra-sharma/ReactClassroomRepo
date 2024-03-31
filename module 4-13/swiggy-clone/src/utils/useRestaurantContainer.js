import { useState, useEffect } from "react";
import { RESTAURANT_DATA_API } from "./constant";
const useRestaurantContainer = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = async () => {
    const data = await fetch(RESTAURANT_DATA_API);
    const result = await data.json();
    setResInfo(
      result.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  return resInfo;
};

export default useRestaurantContainer;
