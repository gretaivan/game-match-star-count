import React, { useState }   from 'react';
import Utils from '../../utils'

const Stars = props => {
    console.log(props.count)

    return(
        <>
            {Utils.range(1, props.count).map(starId => 
                <div key={starId} className="star"></div>
            )}
        </>
    )
};

export default Stars;