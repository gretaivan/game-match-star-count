import React, { useState, useEffect }   from 'react';



const Timer = () => {
    const [seconds, setSeconds] = useState(10); 

    //by default runs every time component renders itself
    useEffect(() => {
        if(seconds > 0){
            const timer = setTimeout(() => {
                setSeconds(seconds - 1);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [seconds]); 



    return(
        <div className="timer">Time Remaining: { seconds }</div>
    )
}

export default Timer; 