import React from 'react';
import Questionaire from './components/Questionaire';
import './styles/main.scss'

const questions = [
    "things should be this way",
    "things cannot be like this."
]
const App = () => {
    return (
        <div className="container">
            <Questionaire data={questions} />
        </div>
    )
}

export default App