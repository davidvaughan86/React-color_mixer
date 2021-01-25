import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import ColorPicker from './colorpicker'





function App() {
  const [red, setRed] = useState(123)
  const [green, setGreen] = useState(10)
  const [blue, setBlue] = useState(9)
  

const appStyle ={
  backgroundColor: `rgb(${red}, ${blue}, ${blue})`
}


  return (
    <div className="appStyle" style ={appStyle} >
      <ColorPicker 
      label ="red:"
      color={red}
      setColor={setRed}/>

      <br />
      <ColorPicker 
      label = "green:"
      color={green}
      setColor={setGreen}/>
      <br />
      <ColorPicker 
      label = "blue:"
      color={blue}
      setColor={setBlue}/>
      
    </div>
  );
}

export default App;
