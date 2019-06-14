import React, { Component } from "react";
import { connect } from "react-redux";

import { getSlider } from "../redux/actions/slider";
import { getNextMatch } from "../redux/actions/upcomingmatch";

import {
  Text,
  Dimensions,
  Image,
  StyleSheet,
  View,
  Platform,
  Linking,
  TouchableWithoutFeedback,
  StatusBar,
  Animated,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";

import SwiperFlatList from "react-native-swiper-flatlist";
import ProgressBar from "react-native-progress/Bar";

import { Mic1, Mic2, Mic3, Mic4, Mic5 } from "../../images";
import { ScrollView } from "react-native-gesture-handler";
export const { width, height } = Dimensions.get("window");
import Icon from "react-native-vector-icons/Entypo";
import Icons from "react-native-vector-icons/FontAwesome";
import Iconss from "react-native-vector-icons/MaterialCommunityIcons";

const newImage = [Mic2, Mic1, Mic3, Mic4, Mic5];

const image = index => ({ image: newImage[index % newImage.length] });

const items = Array.from(Array(5)).map((_, index) => image(index));
function secondsToTime(time) {
  return ~~(time / 60) + ":" + (time % 60 < 10 ? "0" : "") + (time % 60);
}

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageIndex: 0,
      isImageViewVisible: false,
      paused: false,
      progress: 0,
      duration: 0,
      cap: [{ img: require("../../images/Mic1.jpg"), buy: "View Details" }],
      data: [
        {
          videoId: "1559651518089_mc_app.mp4",
          img: require("../../images/Train.jpg")
        },
        {
          videoId: "1559653301202_Mc.mp4",
          img: require("../../images/Mic1.jpg")
        },
        {
          videoId: "1559651518089_mc_app.mp4",
          img: require("../../images/Mic2.jpg")
        },
        {
          videoId: "1559651518089_mc_app.mp4",
          img: require("../../images/Mic3.jpg")
        },
        {
          videoId: "1559651518089_mc_app.mp4",
          img: require("../../images/Mic4.jpg")
        },
        {
          videoId: "1559651518089_mc_app.mp4",
          img: require("../../images/Mic5.jpg")
        }
      ]
    };
  }
  renderItemComponent = ({ item }) => {
    return (
      <View>
        <Image
          // style={{ height: 300, width: 385 }}
          style={styles.image}
          source={{ uri: `http://172.245.17.145:5015${item.imgURL}` }}
        />
      </View>
    );
  };

  componentWillMount = () => {
    // const { dispatch } = this.props.dispatch;
    this.props.dispatch(getSlider());
    this.props.dispatch(getNextMatch());
  };

  render() {
    const { navigate } = this.props.navigation;
    const { data, fact } = this.state;
    const { sliderData, nextMatchData } = this.props;
    const BASE_URL = `http://172.245.17.145:5015`;
    // console.warn(nextMatchData && nextMatchData.data[0]);

    return (
      <ScrollView>
        <View style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="black" />
          <View style={styles.container}>
            <SwiperFlatList
              autoplay
              autoplayDelay={5}
              // index={0}
              autoplayLoop
              data={
                sliderData
                  ? sliderData.data
                  : [
                      {
                        imgURL:
                          "http://172.245.17.145:5015/uploads/gallery/1.jpg"
                      }
                    ]
              }
              renderItem={this.renderItemComponent}
              //showPagination
            />
          </View>

          {/* {Upcoming Matches} */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigate("Details")}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 30
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 18,
                    paddingLeft: 20,
                    color: "white"
                  }}
                >
                  Next Fight
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 18,
                    paddingRight: 20,
                    color: "white"
                  }}
                >
                  {nextMatchData &&
                    `#${nextMatchData.data[0].oppFirst}V${
                      nextMatchData.data[0].oppSecond
                    }`}
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <View>
            <View style={{ flex: 1, marginTop: 20 }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigate("Details")}
              >
                {nextMatchData ? (
                  <Image
                    source={{
                      uri: `${BASE_URL}${nextMatchData.data[0].bannerUrl}`
                    }}
                    style={{
                      width: "100%",
                      height: 200
                    }}
                  />
                ) : (
                  <ActivityIndicator
                    style={{
                      width: "100%",
                      height: 200,
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                    size="small"
                    color={"#aaa"}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>

          {/* {Watch Videos} */}
          <TouchableWithoutFeedback onPress={() => navigate("Videos")}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 18,
                    paddingLeft: 20,
                    color: "white"
                  }}
                >
                  Latest Videos
                </Text>
              </View>

              <View>
                <Text
                  style={{ fontSize: 18, color: "white", paddingRight: 20 }}
                >
                  See all
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>

          <View style={{ marginTop: 20 }}>
            <ScrollView horizontal={true}>
              {data.map((item, i) => (
                <View key={i} style={{ paddingLeft: 20 }}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() =>
                      this.props.navigation.navigate("Match1", {
                        videoId: item.videoId
                      })
                    }
                  >
                    <Image
                      source={item.img}
                      style={{ height: 120, width: 200, borderRadius: 10 }}
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          </View>

          {/* {Fun Facts} */}

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 20,
                  paddingLeft: 20,
                  color: "white"
                }}
              >
                Fun Facts
              </Text>
            </View>
          </View>

          <View style={{ marginTop: 20 }}>
            <ScrollView horizontal={true}>
              {[1, 2, 3, 4, 90].map((item, i) => (
                <View key={i} style={{ paddingLeft: 20 }}>
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: "#433D3E",
                      width: 320,
                      borderRadius: 10
                    }}
                  >
                    <View style={{ alignItems: "center" }}>
                      <Image
                        source={require("../../images/did1.jpg")}
                        style={{
                          height: 100,
                          width: 150,
                          borderRadius: 10,
                          marginTop: 10
                        }}
                      />
                    </View>
                    <View style={{ alignItems: "center", margin: 30 }}>
                      <Text
                        style={{
                          fontSize: 24,
                          // fontFamily: "sans-serif",
                          textAlign: "center",
                          color: "white"
                        }}
                      >
                        I was 7 years old when I started boxing.
                      </Text>
                    </View>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>

          {/* {Social Icons} */}

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 30
            }}
          >
            <Text
              style={{
                color: "white",
                /*fontFamily: "sans-serif",*/ fontSize: 22
              }}
            >
              FOLLOW ME ON
            </Text>
          </View>
          <View style={{ marginTop: 50, marginBottom: 20 }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-evenly"
              }}
            >
              <Icon
                name="facebook"
                size={30}
                color="#159B62"
                onPress={() =>
                  Linking.openURL(
                    "https://www.facebook.com/MichaelConlanBoxer/"
                  )
                }
              />

              <Icon
                name="instagram"
                size={30}
                color="white"
                onPress={() =>
                  Linking.openURL(
                    "https://www.instagram.com/mickconlan11/?hl=en"
                  )
                }
              />

              <Icon
                name="twitter"
                size={30}
                color="#ffaa3e"
                onPress={() =>
                  Linking.openURL(
                    "https://twitter.com/mickconlan11?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                  )
                }
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  image: {
    height: height * 0.4,
    width
  },
  child: {
    height: height * 0.5,
    width,
    justifyContent: "center"
  },
  text: {
    fontSize: width * 0.5,
    textAlign: "center"
  },
  videoCover: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255,255,255, .9)"
  },
  error: {
    backgroundColor: "#000"
  },
  controls: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: 48,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 10
  },
  mainButton: {
    marginRight: 15
  },
  duration: {
    color: "#FFF",
    marginLeft: 15
  },
  backgroundVideo: {
    width: "100%",
    height: 200
  }
});

function mapStateToProps(state) {
  return {
    sliderData: state.sliderData.data,
    nextMatchData: state.nextMatchData.data
  };
}

export default connect(mapStateToProps)(Home);
