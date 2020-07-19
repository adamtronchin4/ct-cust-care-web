import React,{Component} from 'react';
import './App.css';
 import logo1 from './logo1.png';
 import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'


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
    ],
    showInfo: false
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

  toggleListHandler = () => {
    const doesShow = this.state.showInfo;
    this.setState( { showInfo: !doesShow } );
  }

  render () {

    let info = null

    if(this.state.showInfo){
      info = (
        <p>{this.state.info[0].firstName}</p>
      )
    }

    return (
      <div className="App">
        <Navbar bg="light" expand="lg">
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
        </Navbar>
  
        <br/>
        <button className="btn btn-primary" onClick={this.toggleListHandler}>Toggle List</button>
        {info}
      </div>
    );
  }
}

export default App;
