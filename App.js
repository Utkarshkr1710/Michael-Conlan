/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
// import Gallery from './src/screens/Gallery'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import Match from './src/screens/Match'

import HomeScreen from "./src/screens/HomeScreen";

export default class App extends Component {
  render() {
    return (
     
      <Provider store={store}>
       <HomeScreen />
       {/* <Match /> */}
    </Provider>
     

  // <Gallery />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
