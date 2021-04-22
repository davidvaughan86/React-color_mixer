
import './App.css';
import React, {useState} from 'react'
import ColorPicker from './Colorpicker'
import FakeDiv from './Fakediv'
import Header from './Header'
import Footer from './Footer'




function App() {
  const [red, setRed] = useState(255)
  const [green, setGreen] = useState(255)
  const [blue, setBlue] = useState(255)
  

const appStyle ={
  backgroundColor: `rgb(${red}, ${green}, ${blue})`,
  textAlign:'center'
  
}


  return (
    <div className='main-container'>
      
    <Header/>
      
    <Footer />
      
      <div className="container">
        <FakeDiv 
                className="appStyle" 
                style ={appStyle} 
              >
          
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
          
        </FakeDiv>

      </div>
      
    </div>
  );
}

export default App;
