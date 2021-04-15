import React, { useState }   from 'react';

const InputButtons = props => {
    const [buttons, setButtons] = useState(props.number); 

    const colors = {
        available: 'lightgray',
        used: 'lightgreen',
        wrong: 'lightcoral',
        candidate: 'deepskyblue',
    };

    return(
        <button
        className="number"
        style={{backgroundColor: colors[props.status]}}
        onClick={() => {console.log(buttons+props.status); return props.onClick(buttons, props.status)}}
      >
        {props.number}
      </button>
  );
}

export default InputButtons;


