import React from 'react';

const userInput = (props) => {
    const inputStyle = {
        border: '2px solid salmon',
        padding: '5px',
        outline: 'none',
        margin: 'auto',
        textAlign: 'center',
        display: 'block'
    };

    return <input 
        type="text" 
        style={inputStyle}
        onChange={props.changed} 
        value={props.currentName} />;
};

export default userInput;