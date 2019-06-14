import React, { Component } from "react";
import { connect } from "react-redux";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  PixelRatio,
  Dimensions,
  Platform,
  ActivityIndicator
} from "react-native";
import YouTube, {
  YouTubeStandaloneIOS,
  YouTubeStandaloneAndroid
} from "react-native-youtube";
import Icon from "react-native-vector-icons/Feather";

class Details extends Component {
 
  state = {
    isReady: false,
    status: null,
    quality: null,
    error: null,
    isPlaying: true,
    isLooping: true,
    duration: 0,
    currentTime: 0,
    fullscreen: false,
    containerMounted: false,
    containerWidth: null
  };

  static navigationOptions = {
    headerLeft: (
      <Icon
        style={{ paddingLeft: 10 }}
        name="arrow-left"
        size={30}
        color="white"
        onPress={() => this.props.navigation.navigate.openDrawer()}
        // onPress={() => navigate("Home")}
      />
    ),
    headerTitle: 'Next Fight',
    headerRight: null,

    headerStyle: {
      backgroundColor: "#159B62"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
      textAlign: "center"
      //flex: 1
    }
  };


  render() {
    const { nextMatchData } = this.props;

    return nextMatchData ? (
      <ScrollView
        style={styles.container}
        onLayout={({
          nativeEvent: {
            layout: { width }
          }
        }) => {
          if (!this.state.containerMounted)
            this.setState({ containerMounted: true });
          if (this.state.containerWidth !== width)
            this.setState({ containerWidth: width });
        }}
      >
        {this.state.containerMounted && (
          <YouTube
            ref={component => {
              this._youTubeRef = component;
            }}
            // You must have an API Key for the player to load in Android
            apiKey="AIzaSyDzFa-lZN3AqogAa_EndIXWg6CNSR7Agyo"
            // Un-comment one of videoId / videoIds / playlist.
            // You can also edit these props while Hot-Loading in development mode to see how
            // it affects the loaded native module
            videoId={
              nextMatchData ? nextMatchData.data[0].ytVideoUrl : "tlxOGZMZ_Bc"
            }
            // videoIds={['HcXNPI-IPPM', 'XXlZfc1TrD0', 'czcjU1w-c6k', 'uMK0prafzw0']}
            // playlistId="PLF797E961509B4EB5"
            play={this.state.isPlaying}
            loop={this.state.isLooping}
            fullscreen={this.state.fullscreen}
            controls={1}
            style={[
              {
                height: PixelRatio.roundToNearestPixel(
                  this.state.containerWidth / (16 / 9)
                )
              },
              styles.player
            ]}
            onError={e => this.setState({ error: e.error })}
            onReady={e => this.setState({ isReady: true })}
            onChangeState={e => this.setState({ status: e.state })}
            onChangeQuality={e => this.setState({ quality: e.quality })}
            onChangeFullscreen={e =>
              this.setState({ fullscreen: e.isFullscreen })
            }
            onProgress={e =>
              this.setState({
                duration: e.duration,
                currentTime: e.currentTime
              })
            }
          />
        )}

        <View
          style={{
            marginTop: 10,
            backgroundColor: "#159B62",
            flex: 1,
            height: 50
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              // fontFamily: "Roboto",
              padding: 10
            }}
          >
            Event Date & Time: {nextMatchData.data[0].timeDate ? nextMatchData.data[0].timeDate : '22 Jun 2019'}
          </Text>
        </View>

        <View
          style={{
            marginTop: 10,
            backgroundColor: "white",
            flex: 1,
            height: 50
          }}
        >
          <Text
            style={{
              padding: 10,
              color: "#000",
              fontSize: 20
              // fontFamily: "Roboto"
            }}
          >
            Venue: {nextMatchData.data[0].venue}
          </Text>
        </View>

        <View
          style={{
            marginTop: 10,
            backgroundColor: "#ffaa3e",
            flex: 1,
            height: 50
          }}
        >
          <Text
            style={{
              padding: 10,
              color: "white",
              fontSize: 20
              // fontFamily: "Roboto"
            }}
          >
            Head To Head: {nextMatchData.data[0].h2hmatch}
          </Text>
        </View>

        {/* <View style={{paddingLeft:20,marginTop:10 }}>
            <Text
              style={{ color: "white", fontSize: 20, fontFamily: "Roboto" }}
            >
              Description:
            </Text>
          </View> */}
        <View style={{ marginTop: 20, backgroundColor: "#333230", flex: 1 }}>
          <Text
            style={{
              padding: 10,
              color: "white",
              fontSize: 20,
              // fontFamily: "Roboto",
              textAlign: "justify"
            }}
          >
            {nextMatchData.data[0].matchDesc}
          </Text>
        </View>
      </ScrollView>
    ) : (
      <ActivityIndicator
        style={{
          flex: 1,
          backgroundColor: "#000",
          justifyContent: "center",
          alignItems: "center"
        }}
        size={"large"}
        color={"#fff"}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  buttonGroup: {
    flexDirection: "row",
    alignSelf: "center"
  },
  button: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignSelf: "center"
  },
  buttonText: {
    fontSize: 18,
    color: "blue"
  },
  buttonTextSmall: {
    fontSize: 15
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  player: {
    alignSelf: "stretch",
    marginVertical: 10
  }
});

function mapStateToProps(state) {
  return {
    nextMatchData: state.nextMatchData.data
  };
}

export default connect(mapStateToProps)(Details);