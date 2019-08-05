import React from 'react';
import Question from './Question';
import { quizdata } from './Data';

const Quiz = props => {

    console.log(props);
    console.log(quizdata);

    return (
        <>
            {quizdata.map((item,index) => (
                <Question key={index} question={item} />
            ))}
        </>
    )
}

export default Quiz;