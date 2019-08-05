import React from 'react';

const Questions = (props) => {
    // console.log('props', props);
    const question = props.question;
    console.log('question', question);


    return (
        <>
            <h1>{question.question}</h1>
            <div>
                {question.answers.map((item,index) => (
                    <div key={index} choice={item.key}>
                        <p>{item.choice}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Questions;