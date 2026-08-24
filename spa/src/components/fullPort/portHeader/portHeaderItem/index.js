import {React, Fragment} from 'react'


export const PortHeaderItem = (props) => {
    const srcLink = props.srcLink
    const style = {
        width:64,
        height:64,
    }
    return (
        <Fragment>
            <li>
                <div className="portHeader-list-itemBox mb-5">
                    <figure className="figure p-3">
                        <img style={style}src={srcLink} alt={props.textAlt}/>
                    </figure>
                    <p>{props.titleItem}</p>
                    <p>{props.description}</p>
                </div>
            </li>
        </Fragment>
    )
}