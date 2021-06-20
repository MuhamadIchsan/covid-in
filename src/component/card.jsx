import React from 'react'

function card(props) {
    return (
        <div>
            <div className="card bg-blue-skyless text-center text-white">
                <div className="card-header">
                    <h1 className="fs-5">{props.titleHeader}</h1>
                </div>
                <div className="card-body">
                    <p>{props.cases}</p>
                </div>
            </div>
        </div>
    )
}

export default card

