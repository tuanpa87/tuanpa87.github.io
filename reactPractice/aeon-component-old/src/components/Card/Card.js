import React from "react";
import "./Card.css"

const card = props => (
  <div className="Card">
    <figure>
      <img src={props.image} alt={props.id} />
    </figure>
    <div className="Content">
      <h4>{props.subtitle}</h4>
      <h2> {props.title} </h2>
      <p className="Date">
        <span> {props.startDate} </span> -
        <span>{props.endDate} </span>
      </p>
      <hr/>
      <div>
        <p>{props.description}</p>
      </div>
    </div>
  </div>
);

export default card;