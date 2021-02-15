import React from 'react'
import ElapsedTime from './elapsed-time'
import './styles.css'
import TimerButtons from './buttons'



//lesson: https://www.youtube.com/watch?v=pD_T02kcLWI


class Timer extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            timingEvents: [], //this will need to sync with DB
            nonce: 0,
        }

        console.log("debug: in timer consturctor")
        this.addTimerEvent = this.addTimerEvent.bind(this)
        this.tick = this.tick.bind(this)
        this.poll = setInterval(this.tick, 1000)
    }


    tick() {
        this.setState((prevState)=> ({ nonce: prevState.nonce+1 }))
    }

    addTimerEvent(){
        this.setState({
            timingEvents:[
                ...this.state.timingEvents, // ... is a spred operator to dump all timer events
                new Date()
            ]
        })
    }

    render(){
        return(
            <div className='container'>
                <ElapsedTime
                    timingEvents={this.state.timingEvents}
                />
                <TimerButtons
                handleClick={this.addTimerEvent} 
                timingEvents={this.state.timingEvents}
                />
            </div>
        )

    }
}

export default Timer