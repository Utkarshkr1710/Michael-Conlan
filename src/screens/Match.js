import React, { PureComponent } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  PixelRatio,
  Image,
  TouchableOpacity,
  Platform,
  SafeAreaView
} from "react-native";

import { connect } from "react-redux";
import Icon from "react-native-vector-icons/Entypo";

import YouTube, {
  YouTubeStandaloneIOS,
  YouTubeStandaloneAndroid
} from "react-native-youtube";

const uuidv4 = require("uuid/v4");

class Match extends PureComponent {
  state = {
    isReady: false,
    status: null,
    quality: null,
    error: null,
    isPlaying: false,
    isLooping: true,
    duration: 0,
    currentTime: 0,
    fullscreen: false,
    containerMounted: true,
    containerWidth: null,
    videoId: "tlxOGZMZ_Bc",
    category: "latest"
  };

  componentDidMount() {
    const videoIdParam = this.props.navigation.getParam("videoId", "NO-ID");
    const category = this.props.navigation.getParam("category", "NO-ID");
    this.setState({ videoId: videoIdParam, category });
  }

  render() {
    const { category } = this.state;
    const { videoData } = this.props;
    const { latest, gym, match, exclusive, training } = videoData;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#159B62" }}>
        <View
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
                onPress={() => this.props.navigation.navigate("Videos")}
              />
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: 30
              }}
            >
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
              >
                Video
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
              // Un-comment one of videoId / videoIds / playlist.
              // You can also edit these props while Hot-Loading in development mode to see how
              // it affects the loaded native module
              videoId={this.state.videoId}
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
          {Platform.OS !== "ios" && (
            <View style={styles.buttonGroup}>
              <View>
                {this.state.status == "playing" ? (
                  <Icon
                    name="controller-paus"
                    size={30}
                    color="white"
                    onPress={() =>
                      this.setState(s => ({ isPlaying: !s.isPlaying }))
                    }
                  />
                ) : (
                  <Icon
                    name="controller-play"
                    size={30}
                    color="white"
                    onPress={() =>
                      this.setState(s => ({ isPlaying: !s.isPlaying }))
                    }
                  />
                )}
              </View>
              {!this.state.fullscreen && (
                <View style={{}}>
                  <Icon
                    style={{ paddingLeft: 10 }}
                    name="resize-full-screen"
                    size={30}
                    color="white"
                    onPress={() => this.setState({ fullscreen: true })}
                  />
                </View>
              )}
            </View>
          )}
          <ScrollView style={{ width: "100%", height: "100%" }}>
            <View
              style={{
                flex: 1,
                paddingTop: 30,
                borderTopColor: "#aeaeae",
                borderTopWidth: 1,
                paddingBottom: 500
              }}
            >
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                {videoData ? (
                  (category === "latest"
                    ? latest.video
                    : category === "training"
                    ? training.video
                    : category === "gym"
                    ? gym.video
                    : category === "exclusive"
                    ? exclusive.video
                    : match.video
                  ).map(
                    (item, i) =>
                      item.url != this.state.videoId && (
                        <View
                          key={uuidv4()}
                          style={{
                            width: "45%",
                            height: 110,
                            backgroundColor: "#555",
                            borderRadius: 10,
                            margin: "1.5%",
                            justifyContent: "center",
                            alignItems: "center",
                            shadowColor: "#aaa",
                            shadowOffset: {
                              width: 0.25,
                              height: 0.75
                            },
                            shadowOpacity: 0.45
                          }}
                        >
                          <TouchableOpacity
                            style={{
                              width: "100%",
                              height: "100%",
                              borderRadius: 10
                            }}
                            onPress={() => this.setState({ videoId: item.url })}
                          >
                            <Image
                              source={{
                                uri: `https://img.youtube.com/vi/${
                                  item.url
                                }/hqdefault.jpg`
                              }}
                              style={{
                                width: "99%",
                                height: "99%",
                                borderRadius: 10
                              }}
                            />
                          </TouchableOpacity>
                        </View>
                      )
                  )
                ) : (
                  <ActivityIndicator
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                    size={"large"}
                    color={"#fff"}
                  />
                )}
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    // marginTop: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20
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
    videoData: state.videoData
  };
}

export default connect(mapStateToProps)(Match);
