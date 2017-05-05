/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import TodoScreen from './react-native/components/TodoScreen'


export default class TodoApp extends Component {
  render() {
    return (
      <TodoScreen/>
    );
  }
}



AppRegistry.registerComponent('TodoApp', () => TodoApp);
