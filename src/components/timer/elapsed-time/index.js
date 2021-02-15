import React from 'react'
import formatDuration from 'format-duration'

function elapsedTime(events){
    let elapsed = 0;
    for(let i=0; i < events.length; i+=2) {
        //console.log("start " + events[i])
        //console.log( " end " + events[i+1])
        const start = events[i]
        const stop = events[i+1] || new Date()

        elapsed += ( stop - start )
    }
    return elapsed
}

export default function ElapsedTime(props) {
    return (
        <div className='elapsed-time'>
            { formatDuration(elapsedTime(props.timingEvents)) }
        </div>
    )
}