import { RESTAURANT_MENU_API } from "./constant";
import { useEffect, useState } from "react";

const useRestaurantMenu = (props) => {
  const [resMenu, setResMenu] = useState([]);
  useEffect(() => {
    FetchRestaurantMenu();
  }, []);

  const FetchRestaurantMenu = async () => {
    const data = await fetch(RESTAURANT_MENU_API + props.resid);
    const result = await data.json();
    setResMenu(result);
  };

  return resMenu;
};

export default useRestaurantMenu;
