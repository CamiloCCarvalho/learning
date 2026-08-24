import {React, Fragment} from 'react'
import {ContentAbout} from './contentAbout'
import {Stacks} from './stacks'

export const Container = () => {
    return(
        <Fragment>
            <div className="row g-3">
                <ContentAbout/>
                <Stacks/>   
            </div>
        </Fragment>
    )
}