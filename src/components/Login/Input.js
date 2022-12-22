import React from 'react';
import classes from './Login.module.css';

const Input = (props) => {
  return (
    <div
      className={`${classes.control} ${props.inputState.isValid === false ? classes.invalid : ''
        }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.inputState.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  )
}

export default Input;
