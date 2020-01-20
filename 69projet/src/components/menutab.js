import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import logo from '/Users/maxencederoeck/Documents/GitHub/projet-react/69projet/src/image/logo.png'
import Grid from '@material-ui/core/Grid'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import NavBar from 'react-responsive-menubar/lib/NavBar';
import  Component from 'react';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import IconButton from '@material-ui/core/IconButton'
import CircleButton from '@material-ui/icons/AccountCircle'







export default function SimpleTabs() {
    
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);}



        

  

  return (

    <div>

    <Navbar  variant="dark" id="header">
    <Navbar.Brand href="#home">
    
    <img id="img"
         src={logo}
         
      
      className="d-inline-block align-top"
         alt="React Bootstrap logo"       />  
    
    
    </Navbar.Brand>
       <div id="sep"></div>

    
    
    
    <Navbar.Brand href="#home" className="brand">
     <label id="recherche">Recherche  </label>  
     <label id="scientifique">Scientifique</label> 
    </Navbar.Brand>

    <Nav className="mr-auto" variant="pills" >
      <Nav.Link href="#ajout" className="mr-auto" color="secondary">Ajout</Nav.Link>
      <Nav.Link href="#features" className="mr-auto" disabled="true">Connexion</Nav.Link>
      <Nav.Link href="#pricing" className="mr-auto">Contact</Nav.Link>
    </Nav>
    <Form inline>
    <IconButton id="buttonaccount">
        <CircleButton id="account"/>
      </IconButton>
    </Form>
    </Navbar>






    </div>


    

    



//     <Navbar bg="dark" id="header" fixed="top">
        
//     <Navbar.Brand href="#home" className="brand">
//       <img
//         src={logo}
//         width="70"
//         height="70"
//         className="d-inline-block align-top"
//         alt="React Bootstrap logo"
//       />    
       
//     </Navbar.Brand>
//     <from id="sep"></from>
//     {' '}
//     <Navbar.Brand href="#home" className="brand">
//     <label id="recherche">Recherche  </label>  
//     <label id="scientifique">Scientifique</label> 
//     </Navbar.Brand>
    
    

    


    
    
//     <Nav.Link href="#home">Home</Nav.Link>
//       <Nav.Link href="#link">Link</Nav.Link>
//   </Navbar>



  );
}