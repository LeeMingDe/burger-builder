import React from 'react';
import classes from './BuildControl.module.css'

const buildControl = (props) => (
  <div className = {classes.BuildControl}>
    <div className = {classes.Label}>{props.label}</div>
    <button className = {classes.Increase} onClick = {props.add}>Increase</button>
    <button 
      className = {classes.Decrease} 
      onClick = {props.remove} 
      disabled = {props.disabled}>Decrease</button>
  </div>
);

export default buildControl;