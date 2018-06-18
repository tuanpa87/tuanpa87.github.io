import React from "react";
import "./Person.css";

const person = props => {

  return (
    <div className="Person">
      <p onClick={props.click}>
        {" "}
        I'm {props.name} and Im {props.age} years old{" "}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} value={props.name} />
    </div>
    //<p> I'm a person and im {Math.floor(Math.random() * 50)} year old</p>
  );
};

export default person;
