import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import Shimmer from "./Shimmer.jsx";

const RestaurantMenu = () => {
  const resid = useParams();
  const data = useRestaurantMenu(resid);
  if (
    data &&
    data.data &&
    data.data.cards &&
    data.data.cards[2] &&
    data.data.cards[2].card &&
    data.data.cards[2].card.card &&
    data.data.cards[2].card.card.info
  ) {
    const { name } = data.data.cards[2].card.card.info;
    return (
      <div className='restaurant-menu'>
        <h1>{name}</h1>
      </div>
    );
  } else {
    return (
      <div className='restaurant-menu'>
        <Shimmer />
      </div>
    );
  }
};

export default RestaurantMenu;
