import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
export const Body = () => {
  return (
    <div id='wrapper'>
      <Header />
      <Outlet />
    </div>
  );
};
