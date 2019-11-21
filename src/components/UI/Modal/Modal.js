import React, { Component } from 'react';
import classes from './modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
      return nextProps.show !== this.props.show;
  }

  componentWillUpdate() {
    console.log('[Modal] WillUpdate');
  }
  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}
          className={classes.Modal}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;