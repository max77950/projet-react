import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import logo from '/Users/maxencederoeck/Documents/GitHub/projet-react/69projet/src/image/logo.png'
import Grid from '@material-ui/core/Grid'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'






export default function SimpleTabs() {
  
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);}

  

  return (
    <Navbar bg="dark" id="header">
    <Navbar.Brand href="#home" className="brand">
      <img
        src={logo}
        width="70"
        height="70"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />    
       
    </Navbar.Brand>
    <from id="sep"></from>
    {' '}
    <Navbar.Brand href="#home" className="brand">
    <label id="recherche">Recherche  </label>  
    <label id="scientifique">Scientifique</label> 
    </Navbar.Brand>
    
    

    


    
    
    <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
  </Navbar>
  );
}