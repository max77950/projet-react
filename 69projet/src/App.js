import React from 'react';
import './App.css';
import HomepageImage from './components/HomePageImage'
import BasicTextFields from './components/mainsearchbox'
import PiedPage from './components/piedpage'
import SimpleTabs from './components/menutab'

function App() {
  return (

    <div id="test" >

      <div id="image">
      <HomepageImage/>

      <div>

        <SimpleTabs/>



      </div>


      </div>

      <div id="textfield">

      <BasicTextFields/>

      </div>

      <div>

        <PiedPage/>



      </div>
      


      
      
      


      

      
      
    </div>
  
    
    
        
   
  );
}

export default App;
