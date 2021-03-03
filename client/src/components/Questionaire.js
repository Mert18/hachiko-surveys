import React, { useState } from 'react';


const Questionaire = ({ data }) => {

    const [currentQuestion, setCurrentQuestion] = useState(data[0]);
    const [questionIndex, setQuestionIndex] = useState(0);

    const handleClick = () => {
        if (data[questionIndex]) {
            setQuestionIndex(questionIndex + 1);
            setCurrentQuestion(data[questionIndex])
        }
        else {
            return false;
        }

    }
    return (
        <div className="quest">
            <div className="quest__number">
                <p>QUESTION {questionIndex + 1} / {data.length + 1}</p>
            </div>
            <div className="quest__question">
                <h1>{currentQuestion}</h1>
            </div>

            <div className="quest__options">
                <button className="zero" onClick={() => { handleClick() }}></button>
                <button className="one" onClick={() => { handleClick() }}></button>
                <button className="two" onClick={() => { handleClick() }}></button>
                <button className="three" onClick={() => { handleClick() }}></button>
                <button className="four" onClick={() => { handleClick() }}></button>
            </div>

        </div>
    )
}

export default Questionaire;