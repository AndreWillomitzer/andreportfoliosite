import './App.css';
import { Button, Col, Container, Form, FormControl, Nav, Navbar, Row } from 'react-bootstrap';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { useState } from 'react';
import queryString from 'query-string';
import About from './About.js';
import Home from './Home.js';
import Projects from './Projects.js';
import Footer from './Footer.js';
import NotFound from './NotFound.js';
function App() {
/*   let history = useHistory();
  let [searchString, setSearchString] = useState(""); */

  return (
        <>
    <Navbar /* bg="light" */ expand="lg" style={{backgroundColor: "#042A2B"}}>
    <LinkContainer to="/" style={{color: "white"}}>
      <Navbar.Brand>Andre Willomitzer</Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
{/*     <LinkContainer to="/about" style={{color: "white"}}>
      <Nav.Link>About</Nav.Link>
    </LinkContainer> */}
    <LinkContainer to="/projects" style={{color: "white"}}>
      <Nav.Link>Projects</Nav.Link>
    </LinkContainer>
    </Nav>
    </Navbar.Collapse>
    </Navbar>
    <Container>
      <Row>
      <Col>
{/*       (props)=>{
            let rawString = this.props.location.search;
            const parsedVals = queryString.parse(rawString);
            
          } */}
{/*           query={()=>({
            
          })} */}
        <Switch>
          <Route exact path="/andreportfoliosite" render={()=>(<Redirect to="/" />)} />
          <Route exact path="/" render={()=>(<Redirect to="/Home" />)} />
          <Route exact path="/Home" render={()=>(<Home />)}></Route>
          {/* <Route exact path="/About" render={()=>(<About />)}></Route> */}
          <Route path="/Projects" render={()=>(<Projects />)}></Route>
          <Route render={()=>(<NotFound />)} />
        </Switch>
      </Col>
      </Row>
    </Container>
    <br />
    <Footer></Footer>
    </>
  );
}

export default App;

