import React, {Component} from 'react';
import classes from './ContactData.module.css'
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-order';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false,
  }

  orderHandler = event => {
    event.preventDefault();
    this.setState({loading: true});

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'name',
        address: {
          street: 'test 1',
          zipCode: '123124',
          country: 'Singapore'
        },
        email: 'email'
      },
      deliveryMethod:'fastest'
    }

    axios.post('/orders.json', order)
      .then(response => {
        this.setState({loading: false});
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({loading: false});
      });
  }

  render() {
    let form = (        
      <form>
        <input className = {classes.Input} type = 'text' name = 'name' placeholder = 'Your name'></input>
        <input className = {classes.Input} type = 'text' name = 'email' placeholder = 'Your email'></input>
        <input className = {classes.Input} type = 'text' name = 'street' placeholder = 'Street'></input>
        <input className = {classes.Input} type = 'text' name = 'postal' placeholder = 'Postal Code'></input>
        <Button btnType = "Success" clicked = {this.orderHandler}>ORDER</Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner/>
    }
    return (
      <div className = {classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    )
  }
}

export default ContactData;