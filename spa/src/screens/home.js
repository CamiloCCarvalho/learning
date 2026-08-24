import {React, Fragment} from 'react'
import {SessionHome} from '../components/sessionHome'
import {AboutHome} from '../components/aboutHome'
import {PortHome} from '../components/portHome'


const HomeScreen = () => {
    return (
        <Fragment>
            <div>
                <SessionHome/>
                <AboutHome/>
                <PortHome/>
            </div>
        </Fragment>
    )
}

export default HomeScreen;