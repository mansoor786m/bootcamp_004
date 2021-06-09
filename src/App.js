//import logo from './logo.svg';
//import src from "*.avif";
import React ,{useState} from "react";
import './App.css';
import Message from './Message.js';
//import Dinner from './dinner.js';


function App() {

  let [count, setcount]= useState(0);
  let [ismorning , setmorning ]= useState(false);

  return (
    <div className ={`box ${ismorning ? 'daylight':''}`} >

      <h1>Good{ismorning ? 'morning': 'night' }</h1>
      <Message counter = {count} />

      <button onClick={()=> setcount(++count)}> Update counter </button>

      <button onClick={()=>setmorning(!ismorning)}> update day </button>
    </div>
  )
  
}

export default App; 

//  {/* <Dinner></Dinner> */}
//  <Dinner dishnsme = "chiken karahi" sweetdish = "kheer"/>

//   <hr/>
        
//     <Dinner dishnsme = "baryani" sweetdish = "Russ malai"/>

//         <hr/>
        
//         <Dinner dishnsme = "Mutton Qorma" sweetdish = "Dhoda"/>