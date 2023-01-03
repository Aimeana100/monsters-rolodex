import React from "react";
import "./card.css";

export const Card = (props) => {
  return (
    <div className="card-container">
        <img src={`https://robohash.org/${props.monster.id}?set=set5&size=180x170`} />
      <h1> {props.monster.name} </h1>
      <p> {props.monster.email} </p>
    </div>
  );
};
