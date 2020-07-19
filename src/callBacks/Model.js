import React,{Component} from 'react';

const Model = (props) =>{
    return (
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.details}</p>
                {props.delete}                    
                {props.edit}
            </div>
        </div>
    )
}

export default Model