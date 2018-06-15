import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  return (
		<div className="UserOutput">
			<p> {props.userName} </p>
			<p>Definition: {props.title}</p>
			<p>Detail: {props.detail}</p>
		</div>
  );
}

export default userOutput;