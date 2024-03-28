import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1>This is a sample title</h1>;

const HeaderComponent = () => {
  return (
    <div>
      {heading}
      <h1>This is a react functional component</h1>
      <p>This is a sample para</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
