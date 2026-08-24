import {React, Fragment, useState, useEffect} from 'react'
import './clockanalogic.css'


export const ClockAnalogic = () => {

    let day = new Date()
    let now = [(day.getHours()*30), (day.getMinutes()*6), (day.getSeconds()*6)]

    const [hourNow, setHour] = useState(now)

    useEffect(()=> {
        setInterval(()=> {
            setHour(day)
        })
    }, [day])

    let hr = {
        'transform':`rotateZ(${now[0] +(now[1]/12)}deg)`
    }
    let mn = {
        'transform':`rotateZ(${now[1]}deg)`
    }
    let sc = {
        'transform':`rotateZ(${now[2]}deg)`
    }


    return (

        <Fragment>
            <div className="container-fluid page">
                <div className="anClock">
                    <div className="hour">
                        <div className="hr" id="hr" style={hr}></div>
                    </div>
                    <div className="min">
                        <div className="mn" id="mn" style={mn}></div>
                    </div>
                    <div className="sec">
                        <div className="sc" id="sc" style={sc}></div>
                    </div>
                </div>
            </div>
        </Fragment>

    )
}