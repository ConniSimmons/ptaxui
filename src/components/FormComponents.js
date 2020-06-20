/*
import React from 'react';
import './FormStyles.scss';

export function TextField(props)
{
    return (
        <div className="text-field">
            <label htmlFor={props.name}>{props.label}</label>
            <input
                type="text" name={props.name}
                value={props.value || ''}
                onChange={props.changeHandler}
            />
        </div>
    )
}
export function SelectField(props)
{
    return (
        <div className="select-field">
            <label htmlFor={props.name}>{props.label}</label>
            <select
                name={props.name}
                onChange={props.changeHandler}
            >
                <option>{' '}</option>
                {props.options}
            </select>
        </div>
    )
}
export function FormRow(props)
{
    // If additional classes need to be passed in, I want to 
    // check them here
    let classes = '';
    // If className was given to this component AND it's not blank...
    if (props.className && props.className !== '')
    {
        classes = props.className;
    }

    // classes will be blank if none get passed in
    return (
        <div className={`form-row ${classes}`}>
            {props.children}
        </div>
    )
}

*/