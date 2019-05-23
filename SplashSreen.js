import React, { Component } from "react";
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Animated, 
  StatusBar,Image
} from "react-native";

class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 3000,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <ImageBackground
        source={require('./bcg.png')}
        style={styles.container}>
        <FadeInView>
       <ImageBackground
       source={require('./logo.png')}
       style={styles.logo}>
         
         <View style={{width:350}}>
         <Text style={{color:'white',fontSize:30,fontWeight:'bold',marginTop:200}}>
          The Fighting Pride of Eire
        </Text>
        <StatusBar
          barStyle="light-content"
          backgroundColor="black"
        />
        </View>
       </ImageBackground>
       </FadeInView>
       </ImageBackground>
    );
  }
}
//...

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo:{
    width:120,
    height:120,
    backgroundColor:'transparent',
    justifyContent:'center',
    alignItems:'center',
    marginTop: 380,
  }
});