import {React, Fragment, useState, useEffect} from 'react'
import dayjs from 'dayjs'
import './clockdigital.css'

export const ClockDigital = () => {

    const [hourNow, setHour] = useState(dayjs())
    
    useEffect(()=> {
        setInterval(()=> {
            setHour(dayjs())
        }, 1000)
    },[])

    return (
        <Fragment>
            <div className="container-fluid pageBox">
                <div className="clockBox">
                    <h3 className="clockTitle">Relogio Digital</h3>

                    <div className="clock">
                        <p className="clockNumber">{hourNow.get('hour')} :</p>
                        <p className="clockNumber">{hourNow.get('minute')} :</p>
                        <p className="clockNumber">{hourNow.get('second')}</p>
                    </div>
                </div>
                
            </div>
        </Fragment>
    )
}