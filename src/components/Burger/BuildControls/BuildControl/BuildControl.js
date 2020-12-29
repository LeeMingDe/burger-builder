import React from 'react';
import classes from './BuildControl.module.css'

const buildControl = (props) => (
  <div className = {classes.BuildControl}>
    <div className = {classes.Label}>{props.label}</div>
    <button className = {classes.Increase}>Increase</button>
    <button className = {classes.Decrease}>Decrease</button>
  </div>
);

export default buildControl;