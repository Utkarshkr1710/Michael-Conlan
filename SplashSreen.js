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
export const { width, height } = Dimensions.get("window");
import Shimmer from 'react-native-shimmer';

class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 5000,              // Make it take a while
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
        source={require('./Mick.jpg')}
        style={styles.container}>
        <FadeInView>
       {/* <ImageBackground
        source={require('./logoo.jpg')}
        style={styles.logo}>
           </ImageBackground> */}
       </FadeInView>
         <View style={{width:350,marginTop:750}}>
         <Shimmer animationOpacity={2} pauseDuration={100} duration={2000}	>
         <Text style={{color:'white',fontSize:30,marginTop:200,fontFamily:'sans-serif-light',textAlign:'center'}}>
          The Fighting Pride of Éire
        </Text>
        </Shimmer>
        <StatusBar
          barStyle="light-content"
          backgroundColor="black"
        />
        </View>
       </ImageBackground>
      //  </FadeInView>
      //  </ImageBackground>
      
    );
  }
}
//...

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    //backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo:{
    width:140,
    height:150,
    backgroundColor:'transparent',
    justifyContent:'center',
    alignItems:'center',
    marginTop: 600,
  }
});