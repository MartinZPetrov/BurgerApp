import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Button from '..//UI/Button/Button';
class orderSummary extends Component {
  componentWillUpdate(){
    console.log('[Ordersummary] willupdate')
  }
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(key => {
      return (
        <li key={key}>
          <span style={{ textTransform: 'capitalize' }}>{key}</span> :{' '}
          {this.props.ingredients[key]}
        </li>
      );
    });
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A dellicious burger with the following ingredients</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: </strong> {this.props.price.toFixed(2)}
        </p>
        <p>Continue to checkout?</p>
        <Button btnType='Success' clicked={this.props.purchaseContinue}>
          CONTINUE
        </Button>
        <Button btnType='Danger' clicked={this.props.purchaseCancled}>
          CANCEL
        </Button>
      </Aux>
    );
  }
}

export default orderSummary;
