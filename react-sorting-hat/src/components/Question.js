import React from 'react';

const Questions = (props) => {
    // console.log('props', props);
    const question = props.question;
    // console.log('question', question);
    // console.log('questionprops', props)

    return (
        <>
            <h3>{question.question}</h3>
            <div>
                {question.answers.map((item,index) => (
                    <div key={index} choice={item.key} onClick={() => props.updateScore(item.key)}>
                        <p>{item.choice}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Questions;