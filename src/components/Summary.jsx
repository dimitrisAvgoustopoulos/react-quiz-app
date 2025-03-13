import QUESTIONS from '../questions.js';
import complImg from '../assets/quiz-complete.png'

export default function Summary({userAnswers}) {
    const total = QUESTIONS.length;
    const correctAnswers = userAnswers.filter((answer, index) => answer === QUESTIONS[index].answers[0]);
    const wrongAnswers = userAnswers.filter((answer, index) => answer !== QUESTIONS[index].answers[0] && answer !== null);
    const skippedAnswers = userAnswers.filter((answer) => answer === null);

    const correctPercentage = Math.round((correctAnswers.length / total) * 100);
    const wrongPercentage = Math.round((wrongAnswers.length / total) * 100);
    const skippedAnswersPercentage = Math.round((skippedAnswers.length / total) * 100);

    return (
        <div id='summary'>
            <img src={complImg}/>
            <h2>Quiz Completed!</h2>
            <div id="summary-stats">
                <p>
                    <span className="number">{skippedAnswersPercentage}%</span>
                    <span className="text">skipped</span>
                </p>
                <p>
                    <span className="number">{correctPercentage}%</span>
                    <span className="text">answered correctly</span>
                </p>
                <p>
                    <span className="number">{wrongPercentage}%</span>
                    <span className="text">answered incorrectly</span>
                </p>
            </div>

            <ol>
                {userAnswers.map((answer, index) => {

                        let cssClass='user-answer';

                        if(answer === null){
                            cssClass=cssClass+' skipped';
                        }else if(answer === QUESTIONS[index].answers[0]){
                            cssClass=cssClass+' correct';
                        }
                        else{
                            cssClass=cssClass+' wrong';
                        }

                        return (
                            <li key={index}>
                                <h3>{index + 1}</h3>
                                <p className="question">{QUESTIONS[index].text}</p>
                                <p className={cssClass}>{answer ?? 'Skipped'}</p>
                            </li>
                        );
                    })
                }
            </ol>
        </div>
    );
}