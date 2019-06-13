import React, { Component } from "react";
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Animated,
  StatusBar,
  Image
} from "react-native";
export const { width, height } = Dimensions.get("window");
import Shimmer from 'react-native-shimmer';

class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0) // Initial value for opacity: 0
  };

  componentDidMount() {
    Animated.timing(
      // Animate over time
      this.state.fadeAnim, // The animated value to drive
      {
        toValue: 1, // Animate to opacity: 1 (opaque)
        duration: 5000 // Make it take a while
      }
    ).start(); // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim // Bind opacity to animated value
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
      <View style={{ flex: 1, backgroundColor: "#0b0b0d" }}>
        <ImageBackground
          source={require("../../images/Mick.jpg")}
          style={styles.container}
        >
          <StatusBar barStyle="light-content" backgroundColor="black" />
          <FadeInView>
            <Image source={require("../../images/logoo.jpg")} style={styles.logo} />
          </FadeInView>
          <View style={{ width: 350, marginTop: 50 }}>
            {/* <Text style={{color: '#fff', fontSize: 30}}>Michael Conlan</Text> */}
            <Shimmer animationOpacity={2} pauseDuration={100} duration={2000} style={{top:230}}	>
            <Text style={styles.bottomText}>The Fighting Pride of Éire</Text>
            </Shimmer>
          </View>
        </ImageBackground>
      </View>

      //  </FadeInView>
      //  </ImageBackground>
    );
  }
}
//...

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: "100%",
    // height: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 65
  },
  logo: {
    // position: "absolute",
    width: 140,
    height: 150,
    // marginTop: '80%',
    top: "173%",
    // bottom: '10%',
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center"
    // marginTop: 600,
  },
  bottomText: { color: "white", fontSize: 24, textAlign: "center", top: "640%",fontFamily: 'sans-serif', }
});
