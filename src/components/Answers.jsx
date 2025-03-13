import { useRef } from "react";

export default function Answers({answers,selectedAnswer,answerState,onSelectAnswer}){

    const shuffledAnswers=useRef();

    if(!shuffledAnswers.current){
        shuffledAnswers.current=[...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5)
    }

    return(
        <ul id="answers">
            {shuffledAnswers.current.map((ans)=>{

                const currentSelected= selectedAnswer === ans;
                let cssClass='';

                if(currentSelected && answerState==='answered'){
                    cssClass='selected';
                }

                if(currentSelected && (answerState==='correct' || answerState==='wrong')){
                    cssClass=answerState;
                }

                return(
                    <li className="answer" key={ans}>
                        <button className={cssClass} onClick={()=>onSelectAnswer(ans)} disabled={answerState !==''}>
                            {ans}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}