import React from 'react';
import './components.css';
import IconButton from '@material-ui/core/IconButton';

import SearchIcon from '@material-ui/icons/Search';





export default function BasicTextFields() {
  

  return (
    

<form id="textbox">
  
  <input id="inbox"type="text" name="recherche" placeholder="Recherche"/>

  
    

      <IconButton >
        <SearchIcon id="loupe"/>
      </IconButton>


  

</form>


    
    
  );
}