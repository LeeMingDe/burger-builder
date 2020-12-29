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
      {controls.map(item => (
        <BuildControl key = {item.label} label = {item.label}/>
      ))}
    </div>
);

export default buildControls;