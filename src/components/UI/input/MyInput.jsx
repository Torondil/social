import React from 'react';
import classes from './MyInput.module.css';

const MyInput = React.forwardRef(function MyInput(props, ref) {
  return (
    <input ref={ref} className={classes.myInput} {...props}/>
  );
});

export default MyInput