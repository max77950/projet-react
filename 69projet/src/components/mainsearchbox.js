import React from 'react';
import './components.css';
import loupe from '/Users/maxencederoeck/Projects/69-projet-react/69projet/src/icone/loupe.png';
import SearchIcon from '@material-ui/icons/Search';





export default function BasicTextFields() {
  

  return (
    

<form id="textbox">
  
  <input id="inbox"type="text" name="recherche" placeholder="Recherche"/>

  
    <input type="submit"id="searchbutton">

    <SearchIcon/>


    </input>
  
  
  

  

  
  

  
  


</form>


    
    
  );
}