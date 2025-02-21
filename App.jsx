
import styles from './App.module.css';
import Display from './components/Display.jsx';
import ButtonContainer from './components/ButtonContainer.jsx';
import {useState} from 'react';
function App() {
  let [calVal,setCalVal]=useState("");
  const onButtonClick=(event)=>{
    //console.log("Button Clicked"+
   const addVal=event.target.innerText;
    if(addVal==="C"){
      setCalVal("");  
    }
    else if(addVal==="="){
     const result=eval(calVal);
     setCalVal(result);
    }
    else{
      const newVal=calVal+addVal;
      setCalVal(newVal);
    }
    
  }

  return (
    <div className={styles.calculator}>
     <Display calVal={calVal}/>
     <ButtonContainer onButtonClick={onButtonClick}/>
    </div>
  );
}

export default App
