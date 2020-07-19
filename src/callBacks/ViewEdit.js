import React,{Component} from 'react';
import './App.css';
import Model from './Model'

class ViewEdit extends Component{
    
    state = {
        list: [
            {
            id: "23412dasflkjngoun02m",
            phoneNumber: 5199843433,
            customerName: "Adam T",
            reason: "Inventory",
            description: "Update on when Miracle Grow will arrive",
            date: Date("2020-07-18T14:25:00-04:0").toISOString(),
        }
        ],
        showList: false
    }

    toggleListHandle = () => {
        const s = this.state.showList;
        this.setState( { showList: !s } );
    }

    deleteItemHandler = (index) => {
        const updated = [...this.state.list];
        updated.splice(index, 1);
        this.setState({list: updated});
    }

    editItemHandler = (index) => {

    }

    render(){
        let list = null

        if(this.state.showList){
            list = (
                <div>
                  {this.state.list.map((data, index) => {
                    return <Model
                      delete={() => this.deleteItemHandler(index)}
                      edit={() => this.editItemHandler(index)}
                      title={list.titile} 
                      age={person.age}
                      key={person.id}
                      changed={(event) => this.nameChangedHandler(event, person.id)} />
                  })}
                </div>
              );
        }

        return(
            <div>
                <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
}