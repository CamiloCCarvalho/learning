import {React, Fragment} from 'react'
import './knowledgeprog.css'

export const KnowledgeProg = (props) => {


    return(
        <Fragment>
            <div className="bodyProgressBar">

                <div className="knowName">
                    <p>{props.contentText}</p>
                </div>

                <div className="knowQuantity">
                    <div className="progress">
                        <div className={'progress-bar progress-bar ' + props.backg} role="progressbar"style={props.percent} aria-valuenow={props.percentNow} aria-valuemin="0" aria-valuemax="100">{props.innerContent}</div>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}