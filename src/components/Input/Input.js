import React from 'react';

const input = ( props ) => {
    let inputElement = null;

    if (props.invalid && props.shouldValidate && props.touched) {
    }

    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <input
                className="form-control"
                {...props.elementConfig}
                value={props.value}
                
                onChange={props.changed} />;
            break;
        case ( 'textarea' ):
            inputElement = <textarea
                className="form-control"
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'select' ):
            inputElement = (
                <select
                    className="form-control"
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input
                className="form-control"
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    return (
        <div className="form-signin">
            {inputElement}
        </div>
    );

};

export default input;