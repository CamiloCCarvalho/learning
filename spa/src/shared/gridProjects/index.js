import {React, Fragment} from 'react'
import './gridProjects.css'


export const GridProjects = (props) => {
    const itemGrid = props.children

    return (
        <Fragment>
            <div className="container-fluid gridProjects pb-3">
                {itemGrid}
            </div>
        </Fragment>
    )
}