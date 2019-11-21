import React from 'react';
import classes from './Burger.module.css';
import BurgerIngridient from './BurgerIngridient/BurgerIngridient';
import BuilderBurger from '../../containers/BuilderBuger/BuilderBurger';

function Burger(props) {
  let transformedIngridients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, index) => {
        return <BurgerIngridient key={igKey + index} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngridients.length === 0) {
    transformedIngridients = <p>Plese start adding elements</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngridient type='bread-top' />
      {transformedIngridients}
      <BurgerIngridient type='bread-bottom' />
    </div>
  );
}

export default Burger;
