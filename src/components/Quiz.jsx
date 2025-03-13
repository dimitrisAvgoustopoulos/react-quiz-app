import {useState,useCallback} from 'react';

import QUESTIONS from '../questions.js';

import Question from './Question.jsx';
import Summary from './Summary.jsx';

export default function Quiz() {

    //const shuffledAnswers=useRef();
    const [userAnswers,setUserAnswers]=useState([]);
    //const [answerState, setAnswerState]=useState('');

    
    //with the userAnswers array i can get the active question index , !! if the user answers are 2 then the next acive question is the one with index 3 !!
    //const activeQuestionIndex = answerState === '' ? userAnswers.length : userAnswers.length -1;
    const activeQuestionIndex = userAnswers.length;
    const quizComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(answer){
        setUserAnswers((prevUserAnswers)=>{ 
            return ([...prevUserAnswers, answer]);
        })

        //setAnswerState('answered');
        
        // setTimeout(()=>{
        //     if(answer === QUESTIONS[activeQuestionIndex].answers[0]){
        //         setAnswerState('correct');
    
        //     }else{
        //         setAnswerState('wrong');
        //     }
        //     setTimeout(()=>{
        //         setAnswerState('');
        //     },2000)
             
        // },1000);
        
       

    //},[activeQuestionIndex]);
    },[]);


    if(quizComplete){
        return(
            <Summary userAnswers={userAnswers} />
            
        )
    }

    return(
        <div id="quiz">
            <Question 
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                //answers={QUESTIONS[activeQuestionIndex].answers}
                //selectedAnswer={userAnswers[userAnswers.length-1]}
                //answerState={answerState}
                onSelectAnswer={handleSelectAnswer}
            />
        </div>
    );
}