import 'regenerator-runtime/runtime'
import React from 'react'
import { login, logout } from './utils'
import './global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Navbar, Nav, NavDropdown} from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

//IMAGE
import BlockVotelogo from './assets/BlockVotelogo.jpg';
//import pollLogo from './assets/pollLogo.png';
import pollLogo from './assets/pollLogo.svg.png';

//COMPONENTS
import Home from "./Components/Home";
import NewPoll from "./Components/NewPoll";
import PollingStation from "./Components/PollingStation";

import './global.css'
import getConfig from './config'
const { networkId } = getConfig(process.env.NODE_ENV || 'development')


export default function App() {
  const changeCandidatesFunction = async (prompt)=>{
    console.log(prompt);
    let namePair=await window.contract.getCandidatePair({prompt:prompt});
    window.location.replace(window.location.href+"PollingStation");
  };

  return (
   <Router>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/"><img src={pollLogo} height="90" width= "150"></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mx-auto"></Nav>
    <Nav>
      <Nav.Link className="nav_link" href ='/NewPoll'>New Poll</Nav.Link>
      <Nav.Link className="nav_link" onClick={window.accountId === "" ? login : logout}>
        {window.accountId === "" ? "Login" : window.accountId}
        </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
<Routes>
  <Route path='/' element={<Home changeCandidates={changeCandidatesFunction}/>} />
  <Route path='PollingStation' element={<PollingStation />} />
  <Route path='NewPoll' element={<NewPoll />} />
 </Routes>
</Router>
  );
}

