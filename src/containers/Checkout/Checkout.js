import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import * as actions from '../../store/actions//index';
export class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 1,
      bacon: 1
    },
    totalPrice: 0
  };

  checkOutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkOuContinueHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  };

  render() {
    let summary = <Redirect to='/' />;
    
    if (this.props.ings) {
      const purchasedRedirect = this.props.purchased ?  <Redirect to="/" /> : null
      summary = (
        <div>
         {purchasedRedirect}
          <CheckoutSummary
            checkoutContinued={this.checkOuContinueHandler}
            checkoutCancelled={this.checkOutCancelledHandler}
            ingredients={this.props.ings}
          />
          <Route
            path={this.props.match.path + '/contact-data'}
            component={ContactData}
          />
        </div>
      );
    }
    return summary;
  }
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    purchased:state.order.purchased
  };
};

export default connect(mapStateToProps)(Checkout);
