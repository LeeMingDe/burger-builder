import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal'
import Aux from '../Auxiliary/Auxiliary'

const withErrorhandler = (WrappedComponent, axios) => {
  return class extends Component {
      state = {
        error: null,
      }

      componentWillUnmount() {
        axios.interceptors.request.eject(this.reqInterceptor);
        axios.interceptors.request.eject(this.resInterceptor);
      }

      errorConfirmedHandler = () => {
        this.setState({error: null})
      }

      render() {
        this.resInterceptor = axios.interceptors.response.use(res => res, error => {
          this.setState({error: error});
        })

        this.reqInterceptor = axios.interceptors.request.use(req => {
          this.setState({error: null})
          return req;
        });

        return (
          <Aux>
            <Modal 
              show = {this.state.error} 
              modalClosed = {this.errorConfirmedHandler}>
              {this.state.error ? this.state.error.message : null}
            </Modal>
            <WrappedComponent {...this.props}/>
          </Aux>
        )
    }
  }
}

export default withErrorhandler;