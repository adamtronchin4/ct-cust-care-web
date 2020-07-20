import React,{Component} from 'react';
import {Link} from 'react-router-dom'

class View extends Component {
    render(){

        let viewNotes = ( 
        <div>
            <ul class="nav nav-pills nav-fill">
                <li class="nav-item">
                    <a class="nav-link active" href="/myNotes/Add">Add</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/myNotes/View">View</a>
                </li>
            </ul>
            <br></br>
        </div>  )

        return (
                <Link path="/toDo/view" render={() => viewNotes} />
        );
    }
}

export default View