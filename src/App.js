import './App.css';
import { useState } from "react";

function App() {
const [active, setActive] = useState(false);
const [textColor, setTextColor] = useState(false);
const [squareTransition, setSquareTransition] = useState(false)


const paragraphVisible=()=>{
  const scrollValue = document.documentElement.scrollTop;

  if(scrollValue > 200){
   setActive(true);
   setTextColor(true);
   setSquareTransition(true);
  
  }else{
   setActive(false);
   setTextColor(false);
   setSquareTransition(false);
   
  }
}
/*const changeBackgroundText=()=>{
if (scrollValue > 400) {
  setTextColor(true)
}else{
  setTextColor(false)
}
}*/
window.addEventListener('scroll', paragraphVisible);
//window.addEventListener('scroll', changeBackgroundText)

const scrollUp =()=>{
  window.scrollTo({
    top:150,
    behavior : 'smooth',
  })
}

  return (
    <div className="App">
      <span  onClick={scrollUp}  className={active? "show"  : " "}>
      </span>
     <p className={textColor? "showBg" : " "} >Background Scroll</p>
     <button className={squareTransition? "showSquare" : " "} ></button>
     
    </div>
  );
  
}

export default App;
