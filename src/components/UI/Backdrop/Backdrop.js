import React from 'react';
import classes from './Backdrop.module.css';
function Backdrop(props) {
  return props.show ? <div onClick={props.clicked} className={classes.Backdrop} /> : null   ;
}

export default Backdrop;
