import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css'

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'},
];

const buildControls = (props) => (
  // let controls = Object.keys(props.ingredients)
  //   .map(igkey => <BuildControl key = {igkey} label = {igkey}/>)
  //   .reduce((accumulator, item) => accumulator.concat(item), []);
    <div className = {classes.BuildControls}>
      <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
      {controls.map(item => (
        <BuildControl 
          key = {item.label} 
          label = {item.label}
          add = {() => props.addIngredient(item.type)}
          remove = {() => props.removeIngredient(item.type)}
          disabled = {props.disabledInfo[item.type]}/>
      ))}
      <button
        className= {classes.OrderButton}
        disabled = {!props.purchasable}
        onClick = {props.ordered}>ORDER NOW</button>
    </div>
);

export default buildControls;