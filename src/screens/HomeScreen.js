import React, { Component } from 'react';
import { View, Text,StyleSheet,Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import SplashSreen from "./SplashSreen"
import Navigation from './Navigation';



export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoading:true,
    };
  }
  componentWillUnmount(){
    
  }

  performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve("result");
      }, 7000)
    );
  };
  async componentDidMount() {
    
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }

  render() {
    if (this.state.isLoading) {
      return <SplashSreen />;
    }
    return (
      <Navigation />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 140,
    backgroundColor: 'black',
  },
});
