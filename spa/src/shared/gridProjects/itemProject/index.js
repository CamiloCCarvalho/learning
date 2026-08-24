import {React, Fragment} from 'react'
import './itemImage.css'



export const ItemProject = (props) => {

    return (
        <Fragment>
            <img className="img-fluid itemImage" src={props.linkURL}/>
        </Fragment>
    )
}

// src={props.linkURL} alt={props.textAlt}