import { useState, useEffect} from "react";

export default function TimerBar({time,onTimeOut,mode}) {

    const [remainingTime,setRemainingTime] = useState(time);

    useEffect(()=>{
        console.log('SET TIMEOUT')
        const timeout=setTimeout(()=>{
            onTimeOut();
        },time);

        return () => { //clean up the timeout when the component is removed from dom
            clearTimeout(timeout);
            console.log('clean timer')
        };

    },[time,onTimeOut]);

    useEffect(()=>{
        console.log('SET INTERVAL')
        const interval=setInterval(()=>{
            setRemainingTime(prevRemainingTime=>prevRemainingTime -10)
        },10);

        return () => { //clean up the interval when the useeffect runs again
            clearInterval(interval);
            console.log('clean interval')
        };

    },[]);

    return <progress value={remainingTime} max={time} className={mode}/>
    
}