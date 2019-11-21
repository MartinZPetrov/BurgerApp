import React from 'react';
import burgerLogo from '../../assets/images/logo.png';
import classes from './Logo.module.css'

function Logo(props) {
  return (
    <div className={classes.Logo} style={{height:props.height}}>
      <img src={burgerLogo} alt='' />
    </div>
  );
}

export default Logo;
