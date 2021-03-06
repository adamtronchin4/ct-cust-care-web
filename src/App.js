import React,{Component} from 'react';
import './App.css';
import logo1 from './logo1.png';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import {BrowserRouter, Link} from 'react-router-dom'
import ViewNotesPage from './components/myNotes/View'
import ViewToDoPage from './components/toDo/View'
import LoginPage from './components/auth/Login'

class App extends Component {

  state = {
    authCredentials:{
      userId: null,
      password: null
    },
    loginState: false
  }

  // switchNameHandler = (name) =>{
  //   this.setState({
  //     info: [
  //       {
  //         firstName: name,
  //         userId: 1872
  //       },
  //       {
  //         firstName: "Joe",
  //         userId: 1976
  //       }
  //     ]
  //   })
  // }

  toggleListHandler = () => {
    const doesShow = this.state.showInfo;
    this.setState( { showInfo: !doesShow } );
  }

  loginHandler = (user, pass) => { 
    console.log(user +" "+ pass)
  }

  render () {

    // eslint-disable-next-line
    let authButton = null

    window.addEventListener('beforeunload', function (e) {
      e.preventDefault();
      e.returnValue = '';
    });

    if(!this.state.loginState){
      authButton = (
        <Button variant="outline-warning">Login</Button>
      )
    }

    return (
      <div className="App">
        <BrowserRouter>
        <Navbar bg="light" expand="lg">
          <Link to={{pathname: "/"}} style={{textDecoration: "none", color: "black"}}>
          <img src={logo1} className="" alt="logo" height="40px" width="40px"/>
          </Link>
          <Navbar.Brand>CT Customer Care Portal</Navbar.Brand>
          <Navbar.Toggle aria-controls="CT Customer Care" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Link to={{pathname:"/callBack/view"}}>
                  <Nav.Link href="/callBack/view">Call Back</Nav.Link>
                </Link>
                <Link to={{pathname:"/rainCheck/view"}}>
                  <Nav.Link href="/rainCheck/view">Rain Checks</Nav.Link>
                </Link>
                <Link to={{pathname:"/toDo/view"}}>
                  <Nav.Link href="/toDo/view">To-Do Lists</Nav.Link>
                </Link>
                <Link to={{pathname:"/myNotes/view"}}>
                  <Nav.Link href="/myNotes/view">My Notes</Nav.Link>
                </Link>
                <Link to={{pathname:"/groupNotes/view"}}>
                  <Nav.Link href="/groupNotes/view">Group Notes</Nav.Link>
                </Link>
                <Link to={{pathname:"/auth/login"}}>{authButton}</Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <ViewNotesPage></ViewNotesPage>
        <ViewToDoPage></ViewToDoPage>
        <LoginPage loginHandler={this.loginHandler}></LoginPage>
        </BrowserRouter>
        <br/>
      </div>
    );
  }
}

export default App;
