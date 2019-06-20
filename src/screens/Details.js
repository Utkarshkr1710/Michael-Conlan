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
  ActivityIndicator,
  Button
} from "react-native";
import YouTube, {
  YouTubeStandaloneIOS,
  YouTubeStandaloneAndroid
} from "react-native-youtube";
import Icon from "react-native-vector-icons/Entypo";

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
    fullscreen: true,
    containerMounted: false,
    containerWidth: null
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
        <View
          style={{
            flex: 1,
            backgroundColor: "#159B62",
            flexDirection: "row",
            height: 50
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Icon
              style={{ paddingLeft: 10 }}
              name="back"
              size={30}
              color="white"
              onPress={() => this.props.navigation.navigate("Home")}
            />
          </View>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingLeft: 30
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
              Next Fight
            </Text>
          </View>
        </View>
        {this.state.containerMounted && (
          <YouTube
            ref={component => {
              this._youTubeRef = component;
            }}
            // You must have an API Key for the player to load in Android
            apiKey="AIzaSyDzFa-lZN3AqogAa_EndIXWg6CNSR7Agyo"
            lightboxMode="true"
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
        {/* <View style={styles.buttonGroup}>
          
          <View>
            
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.setState(s => ({ isPlaying: !s.isPlaying }))}
            >
              <Text style={styles.buttonText}>
                {this.state.status == "playing" ? "Pause" : "Play"}
              </Text>
            </TouchableOpacity>
          </View>
          {!this.state.fullscreen && (
            <View style={{}}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.setState({ fullscreen: true })}
              >
                <Text style={styles.buttonText}>Set Fullscreen</Text>
              </TouchableOpacity>
            </View>
          )}
        </View> */}

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
            Who:{" "}
            {nextMatchData.data[0] ? ` ${nextMatchData.data[0].oppSecond}` : ""}
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
            When: {nextMatchData.data[0].timeDate}
          </Text>
        </View>

        <View
          style={{
            marginTop: 10,
            backgroundColor: "#FF883E",
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
            Where: {nextMatchData.data[0].venue}
          </Text>
        </View>

       
        <View style={{ marginTop: 20, backgroundColor: "#333230", flex: 1 }}>
          <Text
            style={{
              padding: 10,
              color: "white",
              fontSize: 18,
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
    color: "white"
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
