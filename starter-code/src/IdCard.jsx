import React from "react";

export const IdCard = props => {
  return (
    <div className="card-container">
      <div className="image">
        <img src={props.img} alt="Person picture" />
      </div>
      <div className="person-info">
        <p>First Name: {props.firstName}</p>
        <p>Last Name: {props.lastName}</p>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height}</p>
        <p>Birth: {props.birth}</p>
      </div>
    </div>
  );
};
