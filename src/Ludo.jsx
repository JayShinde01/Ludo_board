import React,{useState} from 'react'

function Ludo() {
    const [moves,setMoves] = useState({blue:0,yellow:0,green:0,red:0})
    function handleClickRed(){
      console.log("red");
      setMoves((prev) => ({ ...prev, red: prev.red + 1 }))
  
    }
    function handleClickBlue(){
      setMoves((prev) => ({ ...prev, blue: prev.blue +1 }))
      console.log("blue");
  
    }
    function handleClickGreen(){
      setMoves((prev) => ({ ...prev, green: prev.green +1 }))
      console.log("green");
  
    }
    function handleClickYellow(){
      setMoves((prev) => ({ ...prev, yellow: prev.yellow +1 }))
  
      
      console.log("yellow");
  
    }
  return (
    <div className='box'>
    <p>Game Begins....!</p>
    <div className='container'>
      <p>Blue Moves:{moves.blue}</p>
      <button id='blue' onClick={handleClickBlue}>+1</button>
      <p>Yellow Moves:{moves.yellow}</p>
      <button id='yellow' onClick={handleClickYellow}>+1</button>
      <p>Green Moves:{moves.green}</p>
      <button id='green' onClick={handleClickGreen}>+1</button>
      <p>Red Moves:{moves.red}</p>
      <button id='red' onClick={handleClickRed}>+1</button>
    </div>
    
  </div>
  )
}

export default Ludo