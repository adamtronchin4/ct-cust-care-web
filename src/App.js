import React,{Component} from 'react';
import Auth from '../src/auth/Auth'
import './App.css';
// import logo1 from './logo1.png';
// import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'


class App extends Component {

  state = {
    info: [
      {
        firstName: "Adam",
        userId: 1872
      },
      {
        firstName: "Joe",
        userId: 1976
      }
    ]
  }

  switchNameHandler = (name) =>{
    this.setState({
      info: [
        {
          firstName: name,
          userId: 1872
        },
        {
          firstName: "Joe",
          userId: 1976
        }
      ]
    })
  }

  render () {
    return (
      <div className="App">
        {/* <Navbar bg="light" expand="lg">
          <img src={logo1} className="" alt="logo" height="40px" width="40px"/>
          <Navbar.Brand>CT Customer Care Portal</Navbar.Brand>
          <Navbar.Toggle aria-controls="CT Customer Care" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#">Call Back</Nav.Link>
                <Nav.Link href="#">Rain Checks</Nav.Link>
                <Nav.Link href="#">To-Do Lists</Nav.Link>
                <Nav.Link href="#">My Notes</Nav.Link>
                <Nav.Link href="#">Group Notes</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar> */}
  
        <br/>
        <button className="btn btn-primary" onClick={() => this.switchNameHandler("Max")}>Change</button>

        <Auth firstName={this.state.info[1].firstName}/>

      </div>
    );
  }
}

export default App;
