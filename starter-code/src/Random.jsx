import React from "react";

export const Random = props => {
  let randomOne = Math.floor(Math.random() * props.max) + props.min;
  return (
    <div className="random">
      <span>
        Random value between {props.min} and {props.max} => {randomOne}
      </span>
    </div>
  );
};
