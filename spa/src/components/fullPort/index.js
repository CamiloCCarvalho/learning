import {React, Fragment} from 'react'
import {PortHeader} from './portHeader'
import {PersonalProjects} from './personalProjects'
import {PersonalClones} from './personalClones'

import './fullPort.css'

export const FullPort = () => {


    return (
        <Fragment>
            <div className="container-fluid portBox">
                <PortHeader/>
                <PersonalProjects/>
                <PersonalClones/>
            </div>
        </Fragment>
    )
}