import React, { useState }   from 'react';
import { Stars, InputButtons } from '..';
import Utils from '../../utils'

const Game = () => {

    const maxKeyNum = 9; 
    const [stars, setStars] = useState(Utils.random(1, 9));
    const [availableNums, setAvailableNums] = useState(Utils.range(1, 9)); 
    const [candidateNums, setCandidateNums] = useState([]); 

    const wrongCandidate = Utils.sum(candidateNums) > stars;

    const numberStatus = (number) => {
        if(!availableNums.includes(number))
        {
            return 'used';
        } 

        if (candidateNums.includes(number)){
            return wrongCandidate ? 'wrong' : 'candidate';
        }

        return 'available';
    }

    const onNumberClick = (number, currentStatus) => {
        if (currentStatus == 'used'){
            return; 
        }
        const newCandidateNums = candidateNums.concat(number); 
        if (Utils.sum(newCandidateNums) !== stars){
            setCandidateNums(newCandidateNums);
        } else {
            //correct pick all candidates are used now
            const newAvailableNums = availableNums.filter(
                n => !newCandidateNums.includes(n)
            )
            //redraw stars from playable numbers
            setStars(Utils.randomSumIn(newAvailableNums, 9));
            setAvailableNums(newAvailableNums);
            setCandidateNums([]);
        }
    }

    return(
        <>
            <div className="help">
            Pick 1 or combination of numbers that sum to the number of stars
            </div>
            <div className="body">
                <div className="left">
                    {Utils.range(1, stars).map( number => 
                        < Stars key={ number } 
                        number={ number }
                        />)}
                </div>
                <div className="right">
                { Utils.range(1, maxKeyNum).map(number =>  
                 < InputButtons key={ number }  
                    // <PlayNumber
                    key={number}
                    status={numberStatus(number)}
                    number={number}
                    onClick={onNumberClick}
                   
                    />)}
                </div>
            </div>
            <div className="timer">Time Remaining: 10</div>
        </>
    )
}

export default Game; 