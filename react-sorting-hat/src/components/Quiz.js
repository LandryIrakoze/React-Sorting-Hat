import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Question from './Question';
import House from './House';
import { quizdata } from './Data';

const Quiz = props => {

    console.log(props);
    // console.log(quizdata);

    return (
        <>
            {quizdata.map((item,index) => (
                <Question key={index} question={item} updateScore={props.updateScore}/>
            ))}
            <h2>Ready to find out your house?</h2>
            <button onClick={() => props.pickHouse()}>Find out now!</button>
            <Route 
                path="/house"
                render={(props) => (
                    <House />
                )} 
            />
        </>
    )
}

export default Quiz;