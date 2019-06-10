import React, { Component } from 'react';
import { View, Text,StyleSheet,Dimensions } from 'react-native';
import FadingSlides from 'react-native-fading-slides';
const { width, height } = Dimensions.get('window');
import SplashSreen from "./SplashSreen"
import Home from "./Home";
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
