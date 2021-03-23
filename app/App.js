import React, {Component} from 'react';
import RootNavigator from './RootNavigator';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Reducers from './reduxSection/reducers';
export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(Reducers)}>
        <RootNavigator />
      </Provider>
    );
  }
}
