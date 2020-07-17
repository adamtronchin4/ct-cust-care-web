import React,{Component} from 'react';
import Auth from '../src/auth/Auth'
import './App.css';

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
        <button onClick={() => this.switchNameHandler("Max")}>Change</button>
        <Auth firstName={this.state.info[1].firstName}/>
      </div>
    );
  }
}

export default App;
