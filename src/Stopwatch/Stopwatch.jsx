import React,{useState,useEffect,useRef} from 'react'
import './stopwatch.css'

const Stopwatch = () => {

  const [isRunning,setIsRunning]=useState(false);
  const [elapsedTime,setElapsedTime]=useState(0)
  const intervalIdRef=useRef(null)
  const startTimeRef=useRef(0)

  useEffect(()=>{
    if(isRunning){
      intervalIdRef.current=setInterval(() => {
        setElapsedTime(Date.now()-startTimeRef.current);
        
      }, 10);
    }
    return () =>{
      clearInterval(intervalIdRef.current); 
    }
  
  },[isRunning]
  
  )
  
  function start(){
  setIsRunning(true);
  startTimeRef.current= Date.now()-elapsedTime;
  
  }
  
  function stop(){
  setIsRunning(false);
  }
  
  {/*function resume(){
  
  }*/}
  
  function reset(){
  setElapsedTime(0)
  setIsRunning(false)
  }
  
  function formatTime(){
  
  let hours= Math.floor(elapsedTime /(100*60*60));
  let minutes=Math.floor(elapsedTime/(1000*60)%60);
  let seconds= Math.floor(elapsedTime/(1000)%60)
  let milliseconds=Math.floor((elapsedTime%1000)/10);
  
  minutes= String(minutes).padStart(2,"0");
  minutes= String(minutes).padStart(2,"0");
  seconds= String(seconds).padStart(2,"0");
  milliseconds= String(milliseconds).padStart(2,"0");
  
  return `${minutes}:${seconds}:${milliseconds}`
  }
  return (
    <>
    <div className="stopwatch">
        <div className="display">{formatTime()}</div>
          <div className="controls">
            <button className="start-button" onClick={()=>{start()}} >start</button>
            <button className="stop-button" onClick={()=>{stop()}} >stop</button>
            <button className="reset-button" onClick={()=>{reset()}} >reset</button>
          </div>
        
    </div>

          <div id='stars'></div>
          <div id='stars2'></div>
          <div id='stars3'></div>

            <div id='title'>
              <span>
                Stopwatch
              </span>
              <span className='made-by'>made by vijay</span>
            </div>
    </>
  )
}

export default Stopwatch