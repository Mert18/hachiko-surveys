import React from 'react';


const Questionaire = ({ data }) => {

    return (
        <div className="quest">
            <div className="quest__number">
                <p>QUESTION 1</p>
            </div>
            <div className="quest__question">
                <h1>{data[0]}</h1>
            </div>

            <div className="quest__options">
                <button className="zero"></button>
                <button className="one"></button>
                <button className="two"></button>
                <button className="three"></button>
                <button className="four"></button>
            </div>

        </div>
    )
}

export default Questionaire;