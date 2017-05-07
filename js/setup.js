
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './app';
import configureStore from '@dataFlow/configureStore';

function setup(){
  class Root extends Component {

    constructor() {
      super();
      this.state = {
        store: configureStore()
      };
    }

    render() {
      return (
        <Provider store={this.state.store}>
          <App />
        </Provider>
      );
    }
  }
  return Root;
}

export default setup;
