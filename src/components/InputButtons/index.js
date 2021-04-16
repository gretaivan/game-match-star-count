import React, { useState }   from 'react';

const InputButtons = props => {
    const [buttons, setButtons] = useState(props.number); 

    const colors = {
        available: 'lightgray',
        used: 'lightgreen',
        wrong: 'lightcoral',
        candidate: 'deepskyblue',
    };

    const handleClick = () => {
        console.log("button " + buttons+" status: " + props.status); 
        return props.onClick(buttons, props.status)
    }

    return(
        <button
            className="number"
            style={{backgroundColor: colors[props.status]}}
            onClick={ handleClick }
      > {props.number} </button>
  );
}

export default InputButtons;


