import React from 'react'


export default function TimerButtons(props){
    const label = props.timingEvents.length % 2 === 0
        ? 'Start'
        : 'Stop'

    return (

        <div className='buttons'>
            <button>
                {"Productive"}
            </button>

            <button
                onClick={props.handleClick}
            >
                {label}
               
            </button>
                
            <button>
            {"procrastinate"}

            </button>

        </div>
    )
}