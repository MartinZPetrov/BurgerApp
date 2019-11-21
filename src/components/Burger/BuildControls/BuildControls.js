import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

function BuildControls(props) {
  return (
    <div className={classes.BuildControls}>
      <p>Current price: {props.price.toFixed(2)}</p>
      {controls.map(ctrl => (
        <BuildControl
          disabled={props.disabled[ctrl.type]}
          key={ctrl.label}
          label={ctrl.label}
          type={ctrl.type}
          removed={props.ingredientRemoved.bind(this, ctrl.type)}
          added={props.ingredientAdded.bind(this, ctrl.type)}
        />
      ))}
      <button 
      onClick={props.ordered }
      disabled={props.purchasable} 
      className={classes.OrderButton}>
        ORDER NOW
      </button>
    </div>
  );
}

export default BuildControls;
