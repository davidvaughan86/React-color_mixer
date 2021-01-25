import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'





function App() {
  const [red, setRed] = useState(123)
  const [green, setGreen] = useState(10)
  const [blue, setBlue] = useState(9)
  

const appStyle ={
  backgroundColor: `rgb(${red}, ${blue}, ${blue})`
}


  return (
    <div className="appStyle" style ={appStyle} >
      <input type ="range" mix="0" max="255" value={red} 
      onChange={(event) => {
        console.log(event.target.value);
        setRed(event.target.value);
      }}
      />
      {red}
      <br />
      <input type ="range" mix="0" max="255" value={green} 
      onChange={(event) => {
        setGreen(event.target.value);
      }}
      />
      {green}
      <br />
      <input type ="range" mix="0" max="255" value={blue}
      onChange={(event) => {
        setBlue(event.target.value)
      }} 
      />
      {blue}
      
    </div>
  );
}

export default App;
