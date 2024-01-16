import React from "react";

const Card = (props) => {
  return (
    <div className="h-full bg-gray-800 rounded-lg flex justify-center items-center">
      {props.children}
    </div>
  );
};

export default Card;
